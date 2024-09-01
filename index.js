class Formatter {
  // دالة لجعل الحرف الأول من النص كبيرًا
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // دالة لتنقية النص من الأحرف غير المسموح بها
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // دالة لجعل النص في شكل عنوان مع استثناء بعض الكلمات الشائعة
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');

    return words
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word.toLowerCase())) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word;
        }
      })
      .join(' ');
  }
}

// اختبار الدوال
console.log(Formatter.capitalize("hello")); // "Hello"
console.log(Formatter.sanitize("Hello@# World!")); // "Hello World"
console.log(Formatter.titleize("the quick brown fox jumps over the lazy dog")); // "The Quick Brown Fox Jumps Over the Lazy Dog"
