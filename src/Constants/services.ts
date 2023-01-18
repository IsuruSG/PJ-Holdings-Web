import ApartmentRounded from '@mui/icons-material/ApartmentRounded';
import ArchitectureRounded from '@mui/icons-material/ArchitectureRounded';
import CleaningServicesRounded from '@mui/icons-material/CleaningServicesRounded';
import ConstructionRounded from '@mui/icons-material/ConstructionRounded';
import LandscapeRounded from '@mui/icons-material/LandscapeRounded';
import ManageAccountsRounded from '@mui/icons-material/ManageAccountsRounded';
import PlumbingRounded from '@mui/icons-material/PlumbingRounded';

const servicesList: {
  title: string;
  link: string;
  description: string;
  Icon: any;
}[] = [
  {
    title: 'Building Construction',
    link: '',
    description: '',
    Icon: ApartmentRounded,
  },
  {
    title: 'Electrical & Plumbing Services',
    link: '',
    description: '',
    Icon: PlumbingRounded,
  },
  {
    title: 'Building Completion & Finishing',
    link: '',
    description: '',
    Icon: ConstructionRounded,
  },
  {
    title: 'Architectural Services',
    link: '',
    description: '',
    Icon: ArchitectureRounded,
  },
  {
    title: 'Management Consultancy Services',
    link: '',
    description: '',
    Icon: ManageAccountsRounded,
  },
  {
    title: 'Landscape Activities',
    link: '',
    description: '',
    Icon: LandscapeRounded,
  },
  {
    title: 'Cleaning Activities',
    link: '',
    description: '',
    Icon: CleaningServicesRounded,
  },
  {
    title: 'Other Services',
    link: '',
    description: '',
    Icon: ConstructionRounded,
  },
];

export default servicesList;
