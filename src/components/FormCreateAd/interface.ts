export interface FormValues {
  title: string;
  adType?: string;
  type?: string;
  year: string;
  km: string;
  value: string;
  description: string;
  imageGalery?: Blob[];
}

export interface EditFormValues {
  title?: string;
  adType?: string;
  type?: string;
  year?: string;
  km?: string;
  value?: string;
  description?: string;
  imageGalery?: Blob[];
}
