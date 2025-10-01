export default function Contact() {
  return (
    <div className="max-w-md mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Name" className="border p-2 rounded"/>
        <input type="email" placeholder="Email" className="border p-2 rounded"/>
        <textarea placeholder="Message" className="border p-2 rounded"></textarea>
        <button className="bg-pink-600 text-white p-2 rounded hover:bg-pink-700">Send</button>
      </form>
    </div>
  );
}
