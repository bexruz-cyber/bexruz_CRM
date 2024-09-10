export interface Agent {
    profileImage: string;
    name: string;
    firstName: string;
    surname: string;
    email: string;
    location: string;
    phone: string;
    properties: number;
    agentId: string;
    facebook: string;
    twitter: string;
    instagram: string;
    agentDetails: {
      age: number;
      city: string;
      state: string;
      country: string;
      postCode: string;
      agentDescription: string;
      agency: string;
      agentLicense: string;
      taxNumber: string;
      serviceArea: string;
      agentStatus: {
        id: number;
        title: string;
        number: number;
        part: [number, number];
        colors: [string, string];
      }[];
    };
  }
  