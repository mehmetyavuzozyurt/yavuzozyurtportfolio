import React from "react";
<p className="text-sm mt-1">Web & Mobil</p>
</div>
</div>
</div>


<div className="order-first md:order-last flex justify-center md:justify-end">
{/* Profil görseli yerine şık bir placeholder kart */}
<div className="w-48 h-48 rounded-2xl bg-gradient-to-tr from-slate-700 to-slate-600 p-1">
<div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
<span className="text-slate-400">Fotoğraf</span>
</div>
</div>
</div>
</section>


{/* Projects */}
<section id="projects" className="mt-16">
<h3 className="text-2xl font-bold">Projeler</h3>
<p className="text-slate-300 mt-2">Aşağıda seçtiğim bazı çalışmalarım yer alıyor. Daha fazlası için bana ulaşabilirsiniz.</p>


<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{projects.map(p => (
<article key={p.id} className="rounded-xl bg-gradient-to-b from-slate-800 to-slate-700 p-5 shadow-lg">
<h4 className="font-semibold">{p.title}</h4>
<p className="text-sm text-slate-300 mt-2">{p.description}</p>
<div className="mt-3 flex flex-wrap gap-2">
{p.tech.map(t => (
<span key={t} className="text-xs border border-slate-600 rounded-full px-2 py-1">{t}</span>
))}
</div>
<div className="mt-4 flex items-center justify-between">
<a href={p.link} className="text-sm hover:underline">Detaylar</a>
<a href={p.link} className="text-sm rounded-md bg-slate-900 px-3 py-1 border border-slate-600">GitHub / Canlı</a>
</div>
</article>
))}
</div>
</section>


{/* Skills */}
<section id="skills" className="mt-16">
<h3 className="text-2xl font-bold">Yetkinlikler</h3>
<p className="text-slate-300 mt-2">Teknolojiler ve çalışma alanlarım.</p>


<div className="mt-4 flex flex-wrap gap-3">
{skills.map(s => (
<div key={s} className="px-3 py-2 bg-slate-800 rounded-md text-sm">{s}</div>
))}
</div>
</section>


{/* Contact */}
<section id="contact" className="mt-16">
<h3 className="text-2xl font-bold">İletişim</h3>
<p className="text-slate-300 mt-2">Projeler veya işbirlikleri için bana yazın.</p>


<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-xl bg-slate-800 p-6">
<p className="text-sm text-slate-300">E-posta</p>
<p className="mt-1">emailiniz@ornek.com</p>


<p className="text-sm text-slate-300 mt-4">Telefon</p>
<p className="mt-1">+90 5xx xxx xx xx</p>


<div className="mt-6 flex gap-3">
<a href="#" aria-label="LinkedIn" className="text-sm hover:underline">LinkedIn</a>
<a href="#" aria-label="GitHub" className="text-sm hover:underline">GitHub</a>
<a href="#" aria-label="Twitter" className="text-sm hover:underline">Twitter</a>
</div>
</div>


<form className="rounded-xl bg-slate-800 p-6" onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:emailiniz@ornek.com?subject=Portfolyo+İletişim'; }}>
<label className="text-sm text-slate-300">Adınız</label>
<input className="w-full mt-2 p-2 rounded-md bg-slate-700 border border-slate-600" placeholder="Adınız" />


<label className="text-sm text-slate-300 mt-4 block">E-posta</label>
<input className="w-full mt-2 p-2 rounded-md bg-slate-700 border border-slate-600" placeholder="eposta@ornek.com" />


<label className="text-sm text-slate-300 mt-4 block">Mesaj</label>
<textarea className="w-full mt-2 p-2 rounded-md bg-slate-700 border border-slate-600" rows={4} placeholder="Mesajınız..." />


<button type="submit" className="mt-4 rounded-md bg-sky-500 px-4 py-2 text-slate-900">Gönder</button>
</form>
</div>
</section>


<footer className="mt-20 border-t border-slate-700 pt-6 pb-10 text-center text-slate-400">
<p>© {new Date().getFullYear()} {name} — Tüm hakları saklıdır.</p>
</footer>
</main>
</div>
);
}
