import React from "react";
import "./data.css";
import { useTranslation } from 'react-i18next';

export default function Data() {
  const { t } = useTranslation();

  return (
    <main className="legal-page">
      <section className="legal-card">
        <h1 className="legal-title">{t('legal.privacyTitle')}</h1>
        <p className="legal-content">{t('legal.text')}</p>
      </section>
    </main>
  );
}
