import MainLayout from "../components/layout/MainLayout";

export default function Notifications() {
  const notifications = [
    {
      title: "Claim Approved",
      message: "Your claim #CLM1023 has been approved and recorded on blockchain.",
      time: "2 hours ago",
    },
    {
      title: "Premium Reminder",
      message: "Your policy premium payment is due tomorrow.",
      time: "1 day ago",
    },
    {
      title: "Policy Activated",
      message: "Your Health Premium policy is now active.",
      time: "3 days ago",
    },
  ];

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Notifications
      </h2>

      <div className="space-y-4 max-w-2xl">

        {notifications.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
            No new notifications
          </div>
        ) : (
          notifications.map((n, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-800">{n.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{n.message}</p>
              <p className="text-xs text-gray-400 mt-2">{n.time}</p>
            </div>
          ))
        )}

      </div>
    </MainLayout>
  );
}
