
import { Separator } from "./ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="mt-12">
      <div className="text-center mb-4">
        <p className="font-bold text-gray-700">
          Coding Smarter. AI-Assisted, Human-Perfected.
        </p>
      </div>
      <Separator className="mb-6" />
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div>
          Copyright {currentYear}. All Rights Reserved. Graceful Media, LLC
        </div>
        <a 
          href="https://www.graceful.agency/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-gray-600">Powered by</span>
          <img 
            src="https://gracefulonline.com/Home/images/Logos/GO-300x300-Transp.png" 
            alt="Graceful Media"
            className="h-6 w-6 object-contain"
          />
        </a>
      </div>
    </div>
  );
};
