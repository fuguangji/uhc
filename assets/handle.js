export function decode(error) {
  switch (error?.code) {
    case "23503":
      return {
        title: "Join Code 無效",
        message: "請確認 Join Code 是否正確。",
      };

    case "23505":
      return {
        title: "資料已存在",
        message: "這筆資料已經存在，請確認是否重複提交。",
      };

    case "23514":
      return {
        title: "資料格式錯誤",
        message: "輸入的資料不符合報名規則。",
      };

    case "23502":
      return {
        title: "資料不完整",
        message: "請確認所有必要欄位都已填寫。",
      };

    case "42501":
      return {
        title: "目前無法提交",
        message: "系統暫時無法接受這項操作，請稍後再試。",
      };

    default:
      return {
        title: "發生未知錯誤",
        message: `系統發生未知錯誤，請截圖並使用信箱連絡主辦方${error?.code ? ` (錯誤代碼: ${error.code})` : ""}。`,
      };
  }
}

export function handle(error) {
  console.error("[UHC]", error);

  return decode(error);
}

