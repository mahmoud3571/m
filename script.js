function sendToWhatsApp(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند النقر على زر التسجيل

    // استرجاع القيم المدخلة في النموذج
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // رقم هاتفك على واتساب (يجب أن يبدأ برمز البلد، مثل +20 لمصر)
    const phoneNumber = "+201112759581";

    // إنشاء رسالة مخصصة
    const message = `مرحبًا، اسمي ${name} وبريدي الإلكتروني هو ${email}. أرغب في التسجيل في كورس برمجة المواقع.`;

    // إنشاء رابط واتساب
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // فتح الرابط في نافذة جديدة
    window.open(whatsappLink, "_blank");
}
