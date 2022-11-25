export interface IPaymentMehod {
  id: number;
  icon: string;
  name: string;
  enabled: boolean;
  credits?: number;
  description?: string;
}
