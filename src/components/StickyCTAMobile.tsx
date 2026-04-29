import { Button } from './ui/button';

export function StickyCTAMobile() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-green-500 p-2.5 sm:p-3 shadow-lg md:hidden">
      <Button asChild className="w-full bg-black hover:bg-gray-800 text-white text-sm sm:text-base md:text-lg py-3 sm:py-3.5">
        <a href="https://payfast.greenn.com.br/kw2t8mr?utm_source=lp&utm_medium=cta&utm_content=sticky_mobile">
          Começar por 13,90 por mês
        </a>
      </Button>
    </div>
  );
}