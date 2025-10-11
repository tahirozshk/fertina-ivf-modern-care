import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User, ShieldCheck, Clock, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [language, setLanguage] = useState("tr");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });

  const t = {
    tr: {
      title: "Ücretsiz Danışmanlıkla Yolculuğunuza Başlayın",
      desc: "Dünyanın dört bir yanından binlerce hasta ebeveynliğe giden yolculukta bize güvendi. Tedavinizin her aşamasını koordine eden deneyimimizle yanınızdayız.",
      firstName: "Ad",
      lastName: "Soyad",
      email: "E‑posta Adresi",
      phone: "Telefon Numarası",
      cta: "Ücretsiz Danışmanlık Al",
      privacy: "Gizliliğiniz önceliğimizdir. Bilgileriniz %100 gizli tutulur ve yalnızca hasta koordinatörlerimiz tarafından sizinle iletişim kurmak için kullanılır.",
    },
    en: {
      title: "Start Your Journey With a Free Consultation",
      desc: "Join thousands of patients who trust us on their journey to parenthood. We coordinate every aspect of your treatment and stay with you throughout.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      cta: "Get My Free Consultation",
      privacy: "Your privacy is our priority. Your information is 100% confidential and used only by our patient coordinators to contact you.",
    },
  } as const;

  const l = t[language as keyof typeof t];

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm({ ...form, [k]: v });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(language === "tr" ? "Form alındı. Teşekkürler!" : "Form received. Thank you!");
  }

  return (
    <div className="min-h-screen">
      <Navigation language={language} setLanguage={setLanguage} />

      <div className="pt-20">
        <section className="relative py-80 bg-cover bg-center bg-top bg-no-repeat" style={{ backgroundImage: 'url(/team.jpg)' }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{l.title}</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">{l.desc}</p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground">{l.firstName}</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder={l.firstName} className="w-full rounded-md border border-border bg-background pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground">{l.lastName}</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder={l.lastName} className="w-full rounded-md border border-border bg-background pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground">{l.email}</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder={l.email} className="w-full rounded-md border border-border bg-background pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-foreground">{l.phone}</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder={l.phone} className="w-full rounded-md border border-border bg-background pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground flex items-start gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary mt-0.5" />
                      <span>{l.privacy}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button type="submit" className="flex-1">{l.cta}</Button>
                      <Button type="button" variant="outline" className="flex-1 flex items-center justify-center gap-2">
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                      </Button>
                    </div>
                  </form>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="font-semibold text-foreground mb-1">{language === "tr" ? "Neden Fertina?" : "Why Fertina?"}</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• {language === "tr" ? "%80+ başarıya ulaşan kişiye özel protokoller" : "Personalized protocols with 80%+ success"}</li>
                        <li>• {language === "tr" ? "AI destekli embriyoloji ve kapsamlı genetik testler" : "AI‑assisted embryology and comprehensive genetics"}</li>
                        <li>• {language === "tr" ? "7/24 ulaşılabilir hasta koordinasyonu" : "24/7 patient coordination"}</li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-start gap-3 p-3 rounded-lg border">
                        <Clock className="h-5 w-5 text-primary" />
                        <div className="text-sm text-muted-foreground">
                          {language === "tr" ? "Çalışma Saatleri: Hafta içi 09:00–18:00" : "Hours: Weekdays 09:00–18:00"}
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg border">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div className="text-sm text-muted-foreground">
                          {language === "tr" ? "Mağusa Yaşam Hastanesi, Gazi Mustafa Kemal Bulvarı No:23" : "Magusa Yasam Hospital, GMK Boulevard No:23"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
