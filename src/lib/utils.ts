export const parseDate = (dateString: string): Date => {
  const parts = dateString.split('/');
  if (parts.length !== 3) {
      // Fallback cho trường hợp định dạng không đúng, trả về ngày không hợp lệ
      return new Date(NaN);
  }
  // parts[0] = ngày (dd), parts[1] = tháng (mm), parts[2] = năm (yyyy)
  // Lưu ý: Tháng trong JS là 0-indexed (0=tháng 1, 11=tháng 12), nên phải trừ 1.
  return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
}

/**
 * Hàm chuyển đổi kích thước file thành số bytes để so sánh.
 * Hỗ trợ các đơn vị KB, MB, GB.
 */
export const sizeToNumber = (size: string): number => {
  if (!size) return 0;
  const parts = size.trim().split(/\s+/);
  const rawValue = parts[0]?.replace(',', '.');
  const unit = (parts[1] || "").toUpperCase();
  const value = parseFloat(rawValue) || 0;

  switch (unit) {
    case "GB":
      return value * 1024 * 1024 * 1024;
    case "MB":
    case "M":
      return value * 1024 * 1024;
    case "KB":
    case "K":
      return value * 1024;
    default:
      // Giả sử bytes nếu không có unit
      return value;
  }
};
