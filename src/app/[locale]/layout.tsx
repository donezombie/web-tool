import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useLocale, useMessages } from "next-intl";
import {
  getFormatter,
  getNow,
  getTimeZone,
  getTranslator,
} from "next-intl/server";
import { ReactNode } from "react";
import Providers from "../../components/Providers";
import { Button } from "components/ui/button";
import Link from "next/link";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslator(locale, "Content");
  const formatter = await getFormatter(locale);
  const now = await getNow(locale);
  const timeZone = await getTimeZone(locale);

  return {
    title: t("Title"),
    // description: t("Description"),
    other: {
      currentYear: formatter.dateTime(now, { year: "numeric" }),
      timeZone: timeZone || "N/A",
    },
  };
}

export default function LocaleLayout({ children, params }: Props) {
  const locale = useLocale();
  const messages = useMessages();

  // Show a 404 error for unknown locales
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <title>DZB Tool</title>
      <body>
        <Providers locale={locale} messages={messages}>
          <main className="page">
            <div className="navbar fixed h-screen w-40 bg-gray-600">
              <div className="flex px-2 py-2 gap-3 flex-col h-full">
                <Link href="/base64">
                  <Button className="w-full">Base64</Button>
                </Link>
              </div>
            </div>

            <div className="pl-44 pt-2 pr-4">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
