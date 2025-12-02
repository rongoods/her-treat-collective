export function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 px-4 mt-20 border-t border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 className="font-shadows text-2xl mb-4 text-pink">Her Treat Collective</h3>
                    <p className="font-sans text-gray-600 max-w-xs">
                        She shares what she saves. A community for connection, empowerment, and joy.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Links</h4>
                    <ul className="space-y-2 font-sans text-gray-600">
                        <li><a href="/events" className="hover:text-pink">Events</a></li>
                        <li><a href="/about" className="hover:text-pink">About Us</a></li>
                        <li><a href="/donate" className="hover:text-pink">Donate</a></li>
                        <li><a href="/contact" className="hover:text-pink">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Newsletter</h4>
                    <p className="font-sans text-gray-600 mb-4 text-sm">Join our mailing list for updates on upcoming treats.</p>
                    <form className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-pink font-sans"
                        />
                        <button type="submit" className="bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition-colors">
                            Join
                        </button>
                    </form>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-sans">
                <p>&copy; {new Date().getFullYear()} Her Treat Collective. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="/legal" className="hover:text-black">Imprint</a>
                    <a href="/privacy" className="hover:text-black">Privacy</a>
                </div>
            </div>
        </footer>
    );
}
