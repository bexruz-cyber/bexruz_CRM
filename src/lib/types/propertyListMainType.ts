export interface PropertyListMain {
    status?: string;
    id?: string; // Assuming UUID is a string
    type?: string;
    img?: string; // Assuming `propertyCardImg1` is a string URL or path
    title?: string;
    location?: string;
    price?: number;
    beds?: number;
    area?: number;
    propertyDetail?: {
      images?: {
        bigImg?: string; // Assuming `bigimg` is a string URL or path
        smallImg?: {
          img1?: string; // Assuming `smallImg1` is a string URL or path
          img2?: string; // Assuming `smallImg2` is a string URL or path
        };
      };
      rating?: number;
      priceOneDay?: number;
      facility?: {
        beds?: boolean;
        baths?: boolean;
        area?: boolean;
        smookingArea?: boolean;
        kitchen?: boolean;
        balcony?: boolean;
        wifi?: boolean;
        parkingArea?: boolean;
      };
      description?: string;
      seller?: {
        sellerImg?: string; // Assuming `profileImg` is a string URL or path
        name_lastname?: string;
        agent?: string;
        sellerLocation?: string;
        propertis?: number;
        map?: string; // HTML string for the iframe
      };
    };
  }
  