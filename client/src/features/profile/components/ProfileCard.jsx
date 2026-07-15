const ProfileCard = ({ user }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Profile Information
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <ProfileItem label="Full Name" value={user?.fullName} />
        <ProfileItem label="Email" value={user?.email} />
        <ProfileItem label="Phone" value={user?.phone} />
        <ProfileItem label="Role" value={user?.role} />
        <ProfileItem label="Blood Group" value={user?.bloodGroup} />
        <ProfileItem label="City" value={user?.city} />
      </div>
    </div>
  );
};

const ProfileItem = ({ label, value }) => (
  <div>
    <p className="text-sm text-slate-500">{label}</p>

    <p className="mt-1 font-semibold text-slate-900 dark:text-white">{value || '-'}</p>
  </div>
);

export default ProfileCard;
