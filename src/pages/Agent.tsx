import { useRef } from 'react'; // Import useRef
import { Swiper as Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { SwiperRef } from 'swiper/react'; // Import SwiperRef for ref

import { AgentCard } from "../components/";
import { AgentData } from "../DB/AgentDB";

// Define the type for agent
interface AgentProps {
  isDarkMode: boolean;
}

export default function Agent({ isDarkMode }: AgentProps) {
  // Use SwiperRef type for the ref instead of SwiperClass
  const swiperRef = useRef<SwiperRef | null>(null);

  const pagination = {
    clickable: true,
    el: '.swiper-pagination', // Target the pagination element
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  // Chunk the agent list into groups of 4
  const agentChunks = chunkArray(AgentData.agentList, 4);

  return (
    <div className="pt-7 pl-[25px] pb-[30px] pr-5 relative">
      <div className="flex items-center justify-between gap-2.5 mb-5">
        <h1 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold md:font-bold text-lg md:text-2xl leading-6 md:leading-[34px]`}>
          Agents List
        </h1>
      </div>
      <div className={`${AgentData.agentList.length > 4 ? "mb-[30px]" : "mb-0"}`}>
        <Swiper
          ref={swiperRef} // Using SwiperRef for the ref
          pagination={pagination}
          modules={[Pagination]}
          className={`${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"} rounded-[10px]`}
          spaceBetween={10}
          slidesPerView={1}
        >
          {agentChunks.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 gap-4">
                {chunk.map(agent => (
                  <AgentCard key={agent.Id} isDarkMode={isDarkMode} agent={agent} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-between mt-4">
        {AgentData.agentList.length > 4 ? (
          <div className="font-normal text-sm text-[#808191]">Showing 1 to 10 Name</div>
        ) : (
          <div className="font-normal text-sm text-[#808191] hidden">Showing 1 to 10 Name</div>
        )}
        <div className="swiper-pagination"></div> {/* Custom pagination container */}
      </div>
    </div>
  );
}
