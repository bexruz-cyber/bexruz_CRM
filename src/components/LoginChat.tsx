import { useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../lib/upload";

interface MessageProps {
    isDarkMode: boolean;
}
interface AvatarState {
    file: File | null;
    url: string;
}
export default function LoginChat({ isDarkMode }: MessageProps) {
    const [loading, setLoading] = useState(false)
    const [avatar, setAvatar] = useState<AvatarState>({
        file: null,
        url: "",
    });


    const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]),
            });
        }
    };
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const { username, email, password } = Object.fromEntries(formData) as { username: string, email: string, password: string };

        try {

            const res = await createUserWithEmailAndPassword(auth, email, password);
            // Ensure avatar.file is not null and upload if it is available
            const imgUrl = avatar.file ? await upload(avatar.file) : undefined;

            // Create user document with optional avatarUrl field
            const userDocData: { username: string; email: string; id: string; blocked: string[]; avatarUrl?: string } = {
                username,
                email,
                id: res.user.uid,
                blocked: [],
                ...(imgUrl ? { avatarUrl: imgUrl } : {}), // Include avatarUrl only if imgUrl is not undefined
            };

            await setDoc(doc(db, "users", res.user.uid), userDocData);
            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: []
            });

            toast.success("Account created! You can log in now!");
        } catch (error) {
            console.error(error);
            toast.error("Registration failed. Please try again.");
        } finally {
            setLoading(false)
        }
    };


    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData) as { username: string, email: string, password: string };
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful!");
        } catch (error) {
            console.log(error);

            toast.error("Login failed")
        } finally {
            setLoading(false)
        }
    };


    return (
        <div className="flex items-center w-full px-10 justify-between ">
            <div className="max-w-[400px] w-full">
                <h2 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-2xl mb-5 line-clamp-1`}>Welcome back</h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-5">
                    <input type="email" placeholder="Email" name="email" required autoComplete="false" className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border`} />
                    <input type="password" placeholder="Password" name="password" required autoComplete="false" className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border`} />
                    <button disabled={loading} type="submit" className="bg-[#475BE8] cursor-pointer disabled:cursor-wait  disabled:bg-[#475ae88e] w-full rounded-[10px] font-semibold text-base text-[#FCFCFC] mb-5 py-2.5 px-[102px] md:px-[114px]">{loading ? "Loading" : "Sign In"}</button>
                </form>
            </div>
            <div className={`h-[80%] w-0.5 ${isDarkMode ? " bg-[#272B30]" : " bg-[#E4E4E4]"}`}></div>
            <div className="max-w-[400px] w-full">
                <h2 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-2xl mb-5 line-clamp-1`}>Create an Acaunt</h2>
                <form onSubmit={handleRegister} className="flex flex-col gap-5">
                    <label htmlFor="file" className={`cursor-pointer  flex items-center gap-5 ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-2xl  line-clamp-1`}>
                        <div className="max-w-[50px] rounded-[10px] flex overflow-hidden">
                            <img src={avatar.url || "./avatar.png"} alt="avatar" className="w-full object-cover" />
                        </div>
                        Upload an img
                    </label>
                    <input type="file" id="file" className="hidden" onChange={handleAvatar} />
                    <input type="text" placeholder="Username" name="username" required autoComplete="false" className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border`} />
                    <input type="email" placeholder="Email" name="email" required autoComplete="false" className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border`} />
                    <input type="password" placeholder="Password" name="password" required autoComplete="false" className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border`} />
                    <button disabled={loading} className="bg-[#475BE8] disabled:cursor-wait  disabled:bg-[#475ae88e] cursor-pointer w-full rounded-[10px] font-semibold text-base text-[#FCFCFC] mb-5 py-2.5 px-[102px] md:px-[114px]">{loading ? "Loading" : "Sign Up"}</button>
                </form>
            </div>
        </div>
    )
}
