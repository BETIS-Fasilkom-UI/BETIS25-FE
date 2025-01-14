const targetDate = new Date('2025-02-14T23:55:00+07:00');
const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
export const isRegistrationClosed = now > targetDate;
