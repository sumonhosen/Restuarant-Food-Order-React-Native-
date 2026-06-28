export const validateRegister = (name: string, phone: string, password: string) => {
  const errors: any = {};

  if (!name.trim()) errors.name = 'Name required';

  if (!phone.trim()) errors.phone = 'Phone required';
  else if (phone.length < 10) errors.phone = 'Invalid phone number';

  if (!password) errors.password = 'Password required';
  else if (password.length < 6) errors.password = 'Min 6 characters';

  return errors;
};

export const validateLogin = (phone: string, password: string) => {
  const errors: any = {};

  if (!phone.trim()) errors.phone = 'Phone required';
  else if (phone.length < 10) errors.phone = 'Invalid phone number';

  if (!password) errors.password = 'Password required';
  else if (password.length < 6) errors.password = 'Min 6 characters';

  return errors;
};


