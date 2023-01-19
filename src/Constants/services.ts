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
    description:
      'This division covers all types of building construction, including new work, repairs, additions, alterations, prefabricated buildings, and temporary structures, such as dwellings, office buildings, stores, public and utility buildings, and farm buildings.',
    Icon: ApartmentRounded,
  },
  {
    title: 'Electrical & Plumbing Services',
    link: '',
    description:
      'This group includes installation activities that support the functioning of a building as such, including installation of electrical systems, plumbing (water, gas and sewage systems), heat and air-conditioning systems, elevators etc.',
    Icon: PlumbingRounded,
  },
  {
    title: 'Building Completion & Finishing',
    link: '',
    description:
      'Installation of fitted kitchens, staircases, shop fittings, and other interior finishes, as well as ceramic, concrete, or cut stone tiles in buildings or other construction projects.',
    Icon: ConstructionRounded,
  },
  {
    title: 'Architectural Services',
    link: '',
    description:
      'This division provides a range of building design and construction services, such as surveying, mapping, inspection, and engineering as well as drafting, inspection, and inspection.',
    Icon: ArchitectureRounded,
  },
  {
    title: 'Management Consultancy Services',
    link: '',
    description:
      'This class provides advice and assistance to businesses on management issues such as strategic planning, process reengineering, change management, cost reduction, and marketing, human resources, compensation, production scheduling and control planning.',
    Icon: ManageAccountsRounded,
  },
  {
    title: 'Landscape Activities',
    link: '',
    description:
      'This service provides care and maintenance of gardens and parks in private and public housing, public and semi-public buildings, including planting, watering, fertilizing, pruning, and overall aesthetic upkeep.',
    Icon: LandscapeRounded,
  },
  {
    title: 'Cleaning Activities',
    link: '',
    description:
      'This service offers a wide range of cleaning services for buildings, including general interior and exterior cleaning, specialized cleaning activities, cleaning of industrial machinery, disinfecting and extermination, bottle cleaning, street sweeping, snow and ice removal.',
    Icon: CleaningServicesRounded,
  },
  {
    title: 'Other Services',
    link: '',
    description:
      'This construction service specializes in specific aspects that are common to different types of structures, such as foundation work, roofing, masonry, electrical, and plumbing, utilizing specialized tools and expertise.',
    Icon: ConstructionRounded,
  },
];

export default servicesList;
