export const ROLES = Object.freeze({
  ADMIN: 'admin',
  DONOR: 'donor',
  HOSPITAL: 'hospital',
  PATIENT: 'patient',
});

export const roleOptions = [
  {
    label: 'Select Role',
    value: '',
  },
  {
    label: 'Donor',
    value: ROLES.DONOR,
  },
  {
    label: 'Patient',
    value: ROLES.PATIENT,
  },
  {
    label: 'Hospital',
    value: ROLES.HOSPITAL,
  },
];
