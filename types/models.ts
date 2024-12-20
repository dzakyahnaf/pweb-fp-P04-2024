enum Role {
  "USER",
  "ADMIN",
}

enum PaymentMethod {
  "QRIS",
  "BANK_TRANSFER",
}

type User = {
  username: string;
  password: string;
  role: Role;
};

type InvoiceHistory = {
  bill: number;
  created_at: Date;
};

type Payment = {
  total_bill: number;
  payment_method: PaymentMethod;
  rent_periods: number; // 3 atau 6 (bulan)
};

type DamageReporting = {
  user: User;
  message: string;
};

type UserReport = {
  message: string;
};

type RoomOccupancy = {
  empty: number;
  filled: number;
};

type UserDetail = {
  user: User;
  invoice_history: InvoiceHistory;
};
