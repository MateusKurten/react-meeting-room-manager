export default function Footer() {
    return (
        <div className="fixed bottom-0 w-full text-center text-xs bg-gray-300 p-1 mt-4">
            <p className="font-bold">Mateus Kurten @ {new Date().getFullYear()}</p>
        </div>
    );
}