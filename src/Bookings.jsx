// src/Bookings.jsx
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from './firebase';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      const q = query(
        collection(db, 'bookings'),
        orderBy('timestamp', 'desc')
      );
      const snapshot = await getDocs(q);
      setBookings(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
    fetchBookings();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Confirmed Bookings</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="px-4 py-2 text-left">Customer</th>
            <th className="px-4 py-2 text-left">Service</th>
            <th className="px-4 py-2 text-left">Time</th>
            <th className="px-4 py-2 text-left">Booked At</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b.id} className="border-b last:border-0">
              <td className="px-4 py-2">{b.customer}</td>
              <td className="px-4 py-2">{b.service}</td>
              <td className="px-4 py-2">{b.time}</td>
              <td className="px-4 py-2">
                {new Date(b.timestamp.seconds * 1000).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
