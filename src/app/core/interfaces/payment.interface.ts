export interface IPaymentMehod {
  id: number;
  icon: string;
  name: string;
  enabled: boolean;
  selected: boolean;
  credits?: number;
  description?: string;
}
