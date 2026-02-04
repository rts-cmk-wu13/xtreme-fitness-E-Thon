
export type FormState = {
  errors?: Record<string, { errors: string[] }>;
  values?: Record<string, FormDataEntryValue | any>;
  message?: string;
  success?: boolean;
  closeDialog?: boolean;
} | null;