class WebStorage {
  /**
   * 设置本地某个数据
   * @param key
   * @param value
   * @param isLocalStorage
   */
  setCache(key: string, value: any, isLocalStorage = true) {
    const newValue = JSON.stringify(value);
    if (isLocalStorage) {
      return localStorage.setItem(key, newValue);
    } else {
      return sessionStorage.setItem(key, newValue);
    }
  }

  /**
   * 获取本地某个数据
   * @param key
   * @param isLocalStrong
   */
  getCache(key: string, isLocalStrong = true) {
    if (isLocalStrong) {
      const newValue = localStorage.getItem(key);
      if (newValue) {
        return JSON.parse(newValue);
      }
    } else {
      const newValue = sessionStorage.getItem(key);
      if (newValue) {
        return JSON.parse(newValue);
      }
    }
  }

  /**
   * 删除某个本地数据
   * @param key
   * @param isLocalStorage
   */
  deleteCache(key: string, isLocalStorage = true) {
    if (isLocalStorage) {
      return localStorage.removeItem(key);
    } else {
      return sessionStorage.removeItem(key);
    }
  }

  /**
   * 清空本地存储
   * @param isLocalStorage
   */
  clearCache(isLocalStorage = true) {
    if (isLocalStorage) {
      localStorage.clear();
    } else {
      sessionStorage.clear();
    }
  }
}

export default new WebStorage();
