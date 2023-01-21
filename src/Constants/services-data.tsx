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
    link: '/services#building-construction',
    description:
      'This division covers all types of building construction, including new work, repairs, additions, alterations, prefabricated buildings, and temporary structures, such as dwellings, office buildings, stores, public and utility buildings, and farm buildings.',
    description_long: (
      <div>
        This division encompasses a wide range of construction activities,
        including the building of various types of structures. It encompasses
        new construction projects, as well as repair, additions, and alterations
        to existing buildings. This also includes the installation of
        pre-fabricated buildings or structures on a site, as well as the
        construction of temporary structures. The scope of this division
        includes the construction of all types of buildings, such as residential
        dwellings, office buildings, stores, public buildings, utility
        buildings, and farm buildings. In other words, it includes all types of
        construction projects, whether they are permanent or temporary in
        nature. The division is responsible for overseeing the entire
        construction process from start to finish, including the planning,
        design, and execution of the project. Additionally, the division may
        also handle the procurement of materials, management of construction
        crews, and coordination with other relevant parties such as architects,
        engineers, and local building authorities to ensure compliance with
        building codes and regulations. The division may also be responsible for
        budgeting and scheduling, as well as quality control and safety measures
        to ensure that the completed project meets the specified standards and
        requirements.
      </div>
    ),
    Icon: ApartmentRounded,
  },
  {
    title: 'Electrical & Plumbing Services',
    link: '/services#electrical-&-plumbing-services',
    description:
      'This group covers installation of building systems such as electrical, plumbing (water, gas, sewage), HVAC, elevators to support the functionality of the building.',
    description_long: (
      <div>
        The group of installation activities that support the functioning of a
        building encompasses a wide range of tasks and systems. One important
        aspect of this group is the installation of electrical systems, which
        include wiring, lighting, and power outlets. These systems ensure that
        the building has a reliable source of electricity and that it is safe
        for the occupants to use. Another key component of building installation
        activities is plumbing. This includes the installation of water, gas,
        and sewage systems, which are essential for the proper functioning of
        the building. Water systems ensure that there is a reliable supply of
        clean water for drinking, cooking, and cleaning, while gas systems
        provide fuel for heating and cooking. Sewage systems, on the other hand,
        are responsible for the safe and efficient removal of waste water from
        the building. Heat and air-conditioning systems are also a crucial
        aspect of building installation activities. These systems are
        responsible for regulating the temperature within the building and
        ensuring that it is comfortable for the occupants. They also play an
        important role in maintaining the overall health and well-being of the
        occupants by ensuring that the air inside the building is clean and free
        of pollutants. Lastly, elevators are another important installation that
        support the functioning of a building. These systems provide easy and
        convenient access to upper floors for the occupants and also help to
        enhance the overall accessibility of the building. Overall, the group of
        installation activities that support the functioning of a building is a
        vital aspect of the construction process and ensures that the building
        is safe, comfortable, and functional for the occupants.
      </div>
    ),
    Icon: PlumbingRounded,
  },
  {
    title: 'Building Completion & Finishing',
    link: '/services#building-completion-&-finishing',
    description:
      'Installation of fitted kitchens, staircases, shop fittings, and other interior finishes, as well as ceramic, concrete, or cut stone tiles in buildings or other construction projects.',

    description_long: (
      <div>
        The group of services described in this paragraph pertains to the
        installation of various types of interior elements in buildings or other
        construction projects. These include fitted kitchens, built-in
        cupboards, staircases, and shop fittings, which all contribute to the
        overall aesthetic and functionality of a space. Additionally, the group
        includes interior completion services such as the installation of
        ceilings and movable partitions, which are important for both visual
        appeal and functionality. Another aspect of this group of services is
        the laying, tiling, hanging, or fitting of various types of floor and
        wall tiles. This could include ceramic, concrete, or cut stone tiles,
        which are commonly used in both residential and commercial settings. The
        process of installing these tiles requires a high level of skill and
        precision, as they must be precisely cut and placed to create a smooth
        and seamless finish. Finally, the group also includes ceramic stove
        fitting, which is a specialized service that involves the installation
        of a stove made from ceramic material. This type of stove is known for
        its durability and heat retention properties, making it a popular choice
        for use in kitchens and other living spaces. Overall, this group of
        services encompasses a wide range of interior installation and
        completion services that are essential for creating functional and
        visually appealing spaces in any type of building or construction
        project.
      </div>
    ),
    Icon: DomainAddRounded,
  },
  {
    title: 'Architectural Services',
    link: '/services#architectural-services',
    description:
      'The division specializes in offering comprehensive building design and construction services, including surveying, mapping, inspection, engineering, drafting, and inspection to ensure the highest level of quality and accuracy in all projects.',

    description_long: (
      <div>
        The division that is being discussed encompasses a wide range of
        services related to the design and construction of buildings and other
        structures. The services provided within this division include
        architectural services, which involve the design and planning of
        buildings, taking into account factors such as functionality,
        aesthetics, and safety. Engineering services, on the other hand, focus
        on the technical aspects of construction, such as structural design and
        analysis, mechanical and electrical systems, and environmental impact
        assessments. Drafting services are also included in this division, which
        involve the creation of detailed technical drawings and plans, used for
        construction and building projects. Building inspection services are
        also provided, which involve the examination of buildings and structures
        to ensure that they comply with safety and building codes. Finally,
        surveying and mapping services are also included in this division, which
        involve the measurement and mapping of land, buildings, and other
        structures, for the purpose of construction, development, and land
        management. Overall, this division provides a comprehensive range of
        services related to the design, construction, and maintenance of
        buildings and other structures, ensuring that they are safe, functional,
        and aesthetically pleasing.
      </div>
    ),
    Icon: ArchitectureRounded,
  },
  {
    title: 'Management Consultancy Services',
    link: '/services#management-consultancy-services',
    description:
      'Business management consulting services cover strategy, process improvement, change management, cost reduction, and various aspects of business operations.',

    description_long: (
      <div>
        This group encompasses a wide range of services that are designed to
        help businesses and other organizations improve their operations and
        achieve their goals. The services provided include expert advice,
        guidance, and operational assistance on a variety of management issues.
        These issues may include corporate strategic planning, which involves
        developing long-term goals and objectives for the organization, as well
        as identifying the resources and strategies needed to achieve them.
        Organizational planning, on the other hand, involves creating a
        structure and processes that will enable the organization to operate
        effectively and efficiently. In addition to these planning-related
        services, the group also offers assistance with business process
        reengineering. This involves analyzing existing processes and
        identifying opportunities for improvement, with the goal of increasing
        efficiency, reducing costs, and improving quality. Change management is
        another important service provided by the group, which involves helping
        organizations to adapt to new circumstances and implement new policies
        and procedures. The group also provides assistance with cost reduction
        and other financial issues, such as budgeting and forecasting. They also
        help businesses and organizations with marketing objectives and
        policies, which includes determining target markets and developing
        effective marketing strategies to reach those markets. Human resource
        policies, practices, and planning is also included, which includes
        creating and implementing policies and procedures related to employee
        recruitment, training, and development. The group also helps
        organizations to develop and implement compensation and retirement
        strategies that will attract and retain top talent. Finally, production
        scheduling and control planning is provided, which includes creating and
        managing production schedules to ensure that products are produced on
        time and within budget.
      </div>
    ),
    Icon: ManageAccountsRounded,
  },
  {
    title: 'Landscape Activities',
    link: '/services#landscape-activities',
    description:
      'This service specializes in maintaining gardens and parks for both private and public properties. We offer planting, watering, fertilizing, pruning and other aesthetic upkeep services to enhance the beauty of your property.',

    description_long: (
      <div>
        4 / 4 This group of services encompasses all aspects of maintaining and
        enhancing the beauty of outdoor spaces for both private and public use.
        This includes the planting of a wide variety of flowers, trees, and
        other plants to create visually appealing and functional spaces. The
        care and maintenance of these spaces is also a crucial aspect of this
        group, which includes tasks such as watering, pruning, fertilizing, and
        pest control. These services are essential for ensuring that parks and
        gardens remain healthy and attractive for all to enjoy. In addition to
        private and public housing, this group also includes the maintenance of
        public and semi-public buildings such as schools, government buildings,
        and other community spaces. This includes the upkeep of any landscaping
        or green spaces on the property, as well as any other outdoor features
        such as playgrounds, sports fields, and walking paths. Overall, this
        group of services plays a vital role in creating beautiful and
        functional outdoor spaces for all to enjoy.
      </div>
    ),
    Icon: LandscapeRounded,
  },
  {
    title: 'Cleaning Activities',
    link: '/services#cleaning-activities',
    description:
      'Building cleaning services include interior/exterior cleaning, specialized cleaning, machinery cleaning, disinfecting, extermination, bottle cleaning, street sweeping and maintenance of outdoor areas by snow and ice removal',

    description_long: (
      <div>
        The group of cleaning services encompasses a wide range of tasks and
        activities, all aimed at maintaining the cleanliness and hygiene of
        various types of buildings and machinery. This includes interior
        cleaning for all types of buildings, such as office buildings,
        residential buildings, and industrial facilities. Exterior cleaning of
        buildings is also included, which may involve tasks such as pressure
        washing, window cleaning, and graffiti removal. In addition to these
        general cleaning tasks, specialized cleaning activities may also be
        offered, such as post-construction cleaning or specialized cleaning for
        historical buildings. Another important aspect of this group of services
        is the cleaning of industrial machinery. This may include tasks such as
        degreasing and decontaminating equipment and machinery used in
        manufacturing or other industrial processes. Cleaning the inside of road
        and sea tankers is also included in this group, which may involve tasks
        such as cleaning out fuel tanks and removing any residue or debris.
        Disinfecting and extermination activities for buildings and industrial
        machinery are also included in this group of services. This may involve
        tasks such as sanitizing surfaces, treating for pests, and ensuring that
        the environment is free from harmful microorganisms. Bottle cleaning is
        also included, which may involve tasks such as cleaning and sanitizing
        bottles used for food and beverages. Other services included in this
        group are street sweeping, snow and ice removal. This may involve tasks
        such as sweeping streets, sidewalks, and parking lots, as well as
        removing snow and ice from sidewalks, driveways, and other surfaces to
        ensure that they are safe to walk or drive on. These services are
        crucial for maintaining the cleanliness and safety of the public spaces
        and communities.
      </div>
    ),
    Icon: CleaningServicesRounded,
  },
  {
    title: 'Other Services',
    link: '/services#other-services',
    description:
      'This construction service specializes in specific aspects that are common to different types of structures, such as foundation work, roofing, masonry, electrical, and plumbing, utilizing specialized tools and expertise.',

    description_long: (
      <div>
        This group encompasses a wide range of construction activities that all
        have one thing in common: they specialize in one specific aspect of
        building different types of structures. These activities require
        specialized skills or equipment to perform effectively and efficiently.
        Examples of activities that may fall under this group include
        demolition, excavation, masonry, roofing, electrical work, and plumbing.
        These activities are often performed by skilled tradespeople or
        contractors who have received specialized training and possess the
        necessary equipment and tools to complete the job. Additionally, many of
        these activities are regulated by government bodies to ensure that they
        are done safely and to a high standard. Overall, this group of
        construction activities plays a critical role in the overall
        construction process and is essential for creating high-quality,
        functional buildings and structures.
      </div>
    ),
    Icon: ConstructionRounded,
  },
];

export default servicesList;
