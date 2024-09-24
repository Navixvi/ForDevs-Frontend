'use client';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mi Proyecto. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/terms" className="hover:underline">
            Términos y Condiciones
          </a>
          <a href="/privacy" className="hover:underline">
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
