import { NextRequest, NextResponse } from "next/server";

// Bildirim gönderilecek e-posta adresi
// TODO: Kullanıcı mail adresini iletince burayı güncelleyeceğiz
const NOTIFICATION_EMAIL = "BURAYA_MAIL_ADRESI_GELECEK";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      first_name,
      last_name,
      email,
      phone,
      birth_date,
      school,
      gpa,
      grade_level,
    } = body;

    // Validasyon
    if (!first_name || !last_name || !email || !phone || !birth_date || !school || !gpa || !grade_level) {
      return NextResponse.json(
        { error: "Lütfen tüm alanları doldurun." },
        { status: 400 }
      );
    }

    // Kayıt verilerini hazırla
    const registrationData = {
      first_name,
      last_name,
      email,
      phone,
      birth_date,
      school,
      gpa: parseFloat(gpa),
      grade_level: parseInt(grade_level),
      registered_at: new Date().toISOString(),
    };

    // Şimdilik kayıtları bir JSON dosyasına (veya console'a) yazdırıyoruz.
    // Supabase bağlantısı kurulduğunda veritabanına kaydedilecek.
    console.log("=== YENİ ÖĞRENCİ KAYDI ===");
    console.log(JSON.stringify(registrationData, null, 2));
    console.log("===========================");

    // E-posta bildirimi gönder
    // Not: Mail servisi entegrasyonu için Resend, Nodemailer veya benzeri bir servis kullanılacak.
    // Şimdilik bildirim hazırlığını yapıyoruz.
    const emailContent = {
      to: NOTIFICATION_EMAIL,
      subject: `Yeni Öğrenci Kaydı: ${first_name} ${last_name}`,
      body: `
Yeni bir öğrenci kaydı yapıldı!

📋 Öğrenci Bilgileri:
━━━━━━━━━━━━━━━━━━━━━━
Ad Soyad: ${first_name} ${last_name}
E-posta: ${email}
Telefon: ${phone}
Doğum Tarihi: ${birth_date}
Okul: ${school}
Diploma Not Ortalaması: ${gpa}
Sınıf Seviyesi: ${grade_level}. Sınıf
Kayıt Tarihi: ${new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
━━━━━━━━━━━━━━━━━━━━━━
      `.trim(),
    };

    console.log("=== E-POSTA BİLDİRİMİ (Henüz mail servisi bağlanmadı) ===");
    console.log(JSON.stringify(emailContent, null, 2));
    console.log("==========================================================");

    return NextResponse.json(
      { 
        message: "Kayıt başarılı!", 
        data: registrationData 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Kayıt hatası:", error);
    return NextResponse.json(
      { error: "Sunucu hatası. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}
