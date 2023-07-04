import Navbar from '../components/Navbar';
import Form from "../components/Form";

export default function DosarTransportPage() {
  return (
    <body>
      <Navbar />
      <div className="flex flex-col w-full items-center mt-10">
        <Form title="Dosar de transport nou" />
      </div>
    </body>
  );
};