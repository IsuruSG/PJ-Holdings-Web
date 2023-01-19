import ApartmentRounded from '@mui/icons-material/ApartmentRounded';
import ArchitectureRounded from '@mui/icons-material/ArchitectureRounded';
import CleaningServicesRounded from '@mui/icons-material/CleaningServicesRounded';
import ConstructionRounded from '@mui/icons-material/ConstructionRounded';
import LandscapeRounded from '@mui/icons-material/LandscapeRounded';
import ManageAccountsRounded from '@mui/icons-material/ManageAccountsRounded';
import PlumbingRounded from '@mui/icons-material/PlumbingRounded';
import DomainAddRounded from '@mui/icons-material/DomainAddRounded';

const servicesList: {
  title: string;
  link: string;
  description: string;
  description_long: React.ReactElement | JSX.Element | string;
  Icon: any;
}[] = [
  {
    title: 'Building Construction',
    link: '',
    description:
      'This division covers all types of building construction, including new work, repairs, additions, alterations, prefabricated buildings, and temporary structures, such as dwellings, office buildings, stores, public and utility buildings, and farm buildings.',
    description_long: (
      <div>
        This division includes general construction of buildings of all kinds.
        It includes new work, repair, additions and alterations, the erection of
        pre-fabricated buildings or structures on the site and also construction
        of temporary nature. Included is the construction of entire dwellings,
        office buildings, stores and other public and utility buildings, farm
        buildings, etc.
      </div>
    ),
    Icon: ApartmentRounded,
  },
  {
    title: 'Electrical & Plumbing Services',
    link: '',
    description:
      'This group includes installation activities that support the functioning of a building as such, including installation of electrical systems, plumbing (water, gas and sewage systems), heat and air-conditioning systems, elevators etc.',
    description_long: (
      <div>
        The group of building installation services includes a wide range of
        activities that are necessary for the proper functioning of a building.
        This includes the installation of electrical systems, plumbing systems
        (water, gas, and sewage systems), heating and air-conditioning systems,
        elevators, and other related systems necessary for the building's
        operation. These services play a critical role in ensuring the safety
        and comfort of building occupants.
      </div>
    ),
    Icon: PlumbingRounded,
  },
  {
    title: 'Building Completion & Finishing',
    link: '',
    description:
      'Installation of fitted kitchens, staircases, shop fittings, and other interior finishes, as well as ceramic, concrete, or cut stone tiles in buildings or other construction projects.',

    description_long: (
      <div>
        Installation of fitted kitchens, built-in cupboards, staircases, shop
        fittings and the like - interior completion such as ceilings, movable
        partitions, etc. Laying, tiling, hanging or fitting in buildings or
        other construction projects of: . ceramic, concrete or cut stone wall or
        floor tiles, ceramic stove fitting'
      </div>
    ),
    Icon: DomainAddRounded,
  },
  {
    title: 'Architectural Services',
    link: '',
    description:
      'This division provides a range of building design and construction services, such as surveying, mapping, inspection, and engineering as well as drafting, inspection, and inspection.',

    description_long: (
      <div>
        The division of building design and construction services includes a
        wide range of offerings essential to the design and construction of
        buildings, including architectural design, engineering consulting,
        drafting, building inspection and compliance, and surveying and mapping
        services.
      </div>
    ),
    Icon: ArchitectureRounded,
  },
  {
    title: 'Management Consultancy Services',
    link: '',
    description:
      'This class provides advice and assistance to businesses on management issues such as strategic planning, process reengineering, change management, cost reduction, and marketing, human resources, compensation, production scheduling and control planning.',

    description_long: (
      <div>
        This class includes the provision of advice, guidance and operational
        assistance to businesses and other organisations on management issues,
        such as corporate strategic and organisational planning, business
        process reengineering, change management, cost reduction and other
        financial issues; marketing objectives and policies; human resource
        policies, practices and planning; compensation and retirement
        strategies; production scheduling and control planning.
      </div>
    ),
    Icon: ManageAccountsRounded,
  },
  {
    title: 'Landscape Activities',
    link: '',
    description:
      'This service provides care and maintenance of gardens and parks in private and public housing, public and semi-public buildings, including planting, watering, fertilizing, pruning, and overall aesthetic upkeep.',

    description_long: (
      <div>
        This service encompasses the creation and upkeep of green spaces in a
        variety of settings, including private and public housing developments,
        as well as public and semi-public buildings. It includes tasks such as
        selecting and planting appropriate flora, providing ongoing care and
        maintenance, including watering, fertilization, pruning and overall
        health and aesthetic upkeep of the garden or park.
      </div>
    ),
    Icon: LandscapeRounded,
  },
  {
    title: 'Cleaning Activities',
    link: '',
    description:
      'This service offers a wide range of cleaning services for buildings, including general interior and exterior cleaning, specialized cleaning activities, cleaning of industrial machinery, disinfecting and extermination, bottle cleaning, street sweeping, snow and ice removal.',

    description_long: (
      <div>
        general interior cleaning of all types of buildings, exterior cleaning
        of buildings, specialised cleaning activities for buildings or other
        specialised cleaning activities, cleaning of industrial machinery,
        cleaning of the inside of road and sea tankers, disinfecting and
        extermination activities for buildings and industrial machinery, bottle
        cleaning, street sweeping, snow and ice removal.
      </div>
    ),
    Icon: CleaningServicesRounded,
  },
  {
    title: 'Other Services',
    link: '',
    description:
      'This construction service specializes in specific aspects that are common to different types of structures, such as foundation work, roofing, masonry, electrical, and plumbing, utilizing specialized tools and expertise.',

    description_long: (
      <div>
        This construction service specializes in a specific aspect that is
        common to various types of structures, requiring specialized skills or
        equipment. Examples of this type of service include foundation work,
        roofing, masonry, electrical, and plumbing. This service utilizes
        specialized tools and expertise to effectively complete the specific
        task at hand.
      </div>
    ),
    Icon: ConstructionRounded,
  },
];

export default servicesList;
