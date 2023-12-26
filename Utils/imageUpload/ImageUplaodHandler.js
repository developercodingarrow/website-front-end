import {
  genericdataByIdHandler,
  genericUploadImageHandler,
  generichalderforIdData,
} from "../generichandler/Generichandler";
import {
  uploadLogo,
  uploadGallery,
  getSingleLogo,
  deleteGalleryImage,
} from "../../Actions/companyAction";

export const handelgetSingleLogo = genericdataByIdHandler(getSingleLogo);
export const handelUplaodGallery = genericUploadImageHandler(uploadGallery);
export const handelDeleteGalleryImage =
  generichalderforIdData(deleteGalleryImage);
