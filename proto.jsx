import React, { useState } from 'react';
import {
  ChevronDown,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldAlert,
  User,
  FileText,
  Link,
  Users,
  Building,
  Calendar,
  ClipboardList,
  Info,
  Flag,
  ListOrdered,
  Package,
  Tool,
  Globe,
} from 'lucide-react';

// --- Mock Data ---
// Based on the provided specification image
const mockChangeRequest = {
  crNumber: 'CR-2025-00123',
  crName: 'Update Main Housing Assembly - V2',
  overallStatus: 'In Progress', // (In Progress, Approved, Rejected, Closed)
  actionStatus: 'Pending Risk Assessment',
  riskLevel: 'High', // (High, Medium, Low)
  coordinator: 'Jane Doe',
  targetImplementationDate: '2025-12-01',
  
  // Details Section (Left & Right Columns)
  details: {
    supplierCoordinator: 'John Smith (ACME Corp)',
    supplierChangeNumber: 'SCN-98765',
    supplierPartNumber: 'PN-456-V1',
    partName: 'Main Housing Assembly',
    description: 'This change involves re-tooling the main injection mold to improve material flow and reduce defects. This will also update the material composition to standard-B. All related components must be checked for fit and finish.',
    customer: 'Global Motors Inc.',
    productLine: 'Model G - Drivetrain',
    buyer: 'Sarah Lee',
    creationDate: '2025-10-20',
    changeStatus: 'In Progress',
    changeReason: 'Quality Improvement',
    typeOfChange: 'Material & Tooling',
    comments: 'Initial review complete. Awaiting risk assessment from engineering.',
    eNumber: 'E-102938',
    crClassification: 'Major',
    initiator: 'Alex Chen',
    secondaryCoordinator: 'Mike Brown',
    links: [
      { name: 'Engineering Specs', url: '#' },
      { name: 'CAD Files', url: '#' },
    ],
  },
  
  // Supplier Details
  supplier: {
    name: 'ACME Corp Manufacturing',
    coordinator: 'John Smith',
    email: 'john.smith@acme.com',
    plant: 'ACME Plant #4 (Mexico)',
    coordinatorEmail: 'john.smith.coord@acme.com',
  },
  
  // Additional Details (Booleans & Lists)
  additionalDetails: {
    implDateAgreed: true,
    customerChangeNum: false,
    customerPartNumChange: true,
    affectedCountries: ['USA', 'Mexico', 'Germany', 'Japan'],
    packingChange: true,
    toolingAffected: true,
  },
  
  // Related Part Numbers (Table)
  relatedParts: [
    { number: 'PN-456-V2', name: 'Main Housing Assembly (New)', description: 'New part number for updated assembly.' },
    { number: 'PN-457-V1', name: 'Mounting Bracket', description: 'No change, check fitment.' },
    { number: 'PN-458-V1', name: 'Seal Gasket', description: 'Material compatibility check required.' },
  ],
  
  // Risk Assessment (Table)
  riskAssessments: [
    { id: 1, category: 'Financial', user: 'Sarah Lee', dueDate: '2025-11-10', status: 'Completed', action: 'Cost analysis', weightage: '30%', comments: 'Cost increase within 5% tolerance.', attachments: 1 },
    { id: 2, category: 'Technical', user: 'Alex Chen', dueDate: '2025-11-15', status: 'In Progress', action: 'Feasibility study', weightage: '50%', comments: 'Pending tooling tests.', attachments: 2 },
    { id: 3, category: 'Supply Chain', user: 'John Smith', dueDate: '2025-11-20', status: 'Pending', action: 'Supplier capacity check', weightage: '20%', comments: '', attachments: 0 },
  ],
  
  // Authorization / Signatures (Timeline)
  authorizers: [
    { role: 'Initiator', user: 'Alex Chen', status: 'Signed', date: '2025-10-20' },
    { role: 'Coordinator', user: 'Jane Doe', status: 'Signed', date: '2025-10-21' },
    { role: 'Risk Analyst (Tech)', user: 'Alex Chen', status: 'In Progress', date: null },
    { role: 'Risk Analyst (Finance)', user: 'Sarah Lee', status: 'Pending', date: null },
    { role: 'Final Approver', user: 'Director Ops', status: 'Not Started', date: null },
  ],

  // Action History (Table)
  actionHistory: [
     { id: 1, category: 'Financial', name: 'Cost analysis', user: 'Sarah Lee', dueDate: '2025-11-10', status: 'Completed' },
     { id: 2, category: 'Technical', name: 'Feasibility study', user: 'Alex Chen', dueDate: '2025-11-15', status: 'In Progress' },
  ],
};

// --- Reusable Components ---

/**
 * A reusable card component for the sidebar and accordion content
 */
const Card = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{children}</h3>
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

/**
 * A reusable component for each accordion item
 */
const AccordionItem = ({ id, title, icon, children, isActive, onToggle }) => {
  const Icon = icon || Info;
  return (
    <Card className="mb-4">
      <button
        onClick={() => onToggle(id)}
        className="flex justify-between items-center w-full p-4 text-left"
        aria-expanded={isActive}
      >
        <div className="flex items-center">
          <Icon className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">{title}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform ${
            isActive ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isActive ? 'max-h-full' : 'max-h-0'
        }`}
      >
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          {children}
        </div>
      </div>
    </Card>
  );
};

/**
 * A reusable component for displaying a single detail item
 */
const DetailItem = ({ label, value, isBoolean = false }) => {
  let displayValue;
  if (isBoolean) {
    displayValue = value ? (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Yes</span>
    ) : (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">No</span>
    );
  } else if (Array.isArray(value)) {
     displayValue = (
      <div className="flex flex-wrap gap-2">
        {value.map((item, index) => (
          <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
            {item}
          </span>
        ))}
      </div>
     );
  } else {
    displayValue = <p className="text-gray-900 dark:text-white">{value || 'N/A'}</p>;
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">{label}</label>
      {displayValue}
    </div>
  );
};

/**
 * A component to render status badges with correct colors and icons
 */
const StatusBadge = ({ status }) => {
  const statusMap = {
    'In Progress': { icon: Clock, color: 'blue' },
    'Signed': { icon: CheckCircle2, color: 'green' },
    'Completed': { icon: CheckCircle2, color: 'green' },
    'Pending': { icon: Clock, color: 'yellow' },
    'Rejected': { icon: XCircle, color: 'red' },
    'Not Started': { icon: Info, color: 'gray' },
  };
  
  const { icon: Icon, color } = statusMap[status] || statusMap['Not Started'];
  
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]}`}>
      <Icon className="w-3 h-3 mr-1.5" />
      {status}
    </span>
  );
};

/**
 * A component to render risk level badges
 */
const RiskBadge = ({ level }) => {
  const riskMap = {
    'High': { icon: ShieldAlert, color: 'red' },
    'Medium': { icon: ShieldAlert, color: 'yellow' },
    'Low': { icon: ShieldAlert, color: 'green' },
  };

  const { icon: Icon, color } = riskMap[level] || { icon: ShieldAlert, color: 'gray' };

  const colorClasses = {
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]}`}>
      <Icon className="w-3 h-3 mr-1.5" />
      Risk: {level}
    </span>
  );
};


// --- Main Page Sections ---

/**
 * The header section of the page
 */
const PageHeader = ({ crNumber, crName, status, risk }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md mb-6 rounded-lg p-4">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{crName}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{crNumber}</p>
      </div>
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <RiskBadge level={risk} />
        <StatusBadge status={status} />
      </div>
    </div>
  </div>
);

/**
 * The sidebar component with key info and authorization timeline
 */
const StatusSidebar = ({ data, onApprove, onReject }) => (
  <aside className="space-y-6">
    {/* --- Status & Actions Card --- */}
    <Card>
      <CardHeader>Status & Actions</CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Overall Status</label>
          <StatusBadge status={data.overallStatus} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Action Status</label>
           <p className="text-gray-900 dark:text-white font-semibold">{data.actionStatus}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-4">
          <button 
            onClick={onApprove}
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:ring-offset-gray-900"
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Approve
          </button>
          <button 
            onClick={onReject}
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:ring-offset-gray-900"
          >
            <XCircle className="w-4 h-4 mr-2" />
            Reject
          </button>
        </div>
      </CardContent>
    </Card>

    {/* --- Authorization Timeline Card --- */}
    <Card>
      <CardHeader>Authorization Timeline</CardHeader>
      <CardContent>
        <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-6">
          {data.authorizers.map((auth, index) => {
            const isCompleted = auth.status === 'Signed';
            const isInProgress = auth.status === 'In Progress';
            const isPending = ['Pending', 'Not Started'].includes(auth.status);

            let IconComponent = Clock;
            let iconBg = 'bg-yellow-400';
            let lineStyle = 'border-gray-200 dark:border-gray-700';

            if (isCompleted) {
              IconComponent = CheckCircle2;
              iconBg = 'bg-green-500';
            } else if (isInProgress) {
              IconComponent = Clock;
              iconBg = 'bg-blue-500';
            } else if (isPending && index !== 0 && data.authorizers[index - 1].status === 'Signed') {
              // This is the current "next" step
              IconComponent = User;
              iconBg = 'bg-blue-500 animate-pulse';
            } else {
               IconComponent = User;
               iconBg = 'bg-gray-400';
            }

            return (
              <li key={index} className="ml-6">
                <span className={`absolute flex items-center justify-center w-6 h-6 ${iconBg} rounded-full -left-3 ring-8 ring-white dark:ring-gray-800`}>
                  <IconComponent className="w-4 h-4 text-white" />
                </span>
                <div className="ml-2">
                  <h4 className="flex items-center mb-1 text-base font-semibold text-gray-900 dark:text-white">
                    {auth.role}
                    {isInProgress && <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">In Progress</span>}
                  </h4>
                  <p className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                    {auth.user}
                  </p>
                  {isCompleted && (
                    <time className="block text-sm font-normal leading-none text-green-700 dark:text-green-400">
                      Signed on {auth.date}
                    </time>
                  )}
                  {isPending && !isInProgress && (
                     <time className="block text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                      Awaiting Signature
                    </time>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>

    {/* --- Key Info Card --- */}
    <Card>
      <CardHeader>Key Info</CardHeader>
      <CardContent className="space-y-4">
        <DetailItem label="Coordinator" value={data.coordinator} />
        <DetailItem label="Target Implementation Date" value={data.targetImplementationDate} />
        <DetailItem label="Supplier Change Number" value={data.details.supplierChangeNumber} />
        <DetailItem label="Supplier Part Number" value={data.details.supplierPartNumber} />
        <DetailItem label="Initiator" value={data.details.initiator} />
        <DetailItem label="Buyer" value={data.details.buyer} />
      </CardContent>
    </Card>
  </aside>
);

// --- Extracted Content Components for Master Accordion ---

const ChangeRequestDetailsContent = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
    {/* Left Column from Spec */}
    <div className="space-y-4">
      <DetailItem label="Supplier Coordinator" value={data.details.supplierCoordinator} />
      <DetailItem label="Supplier Change Number" value={data.details.supplierChangeNumber} />
      <DetailItem label="Supplier Part Number" value={data.details.supplierPartNumber} />
      <DetailItem label="Part Name" value={data.details.partName} />
      <DetailItem label="Customer" value={data.details.customer} />
      <DetailItem label="Product Line" value={data.details.productLine} />
      <DetailItem label="Buyer" value={data.details.buyer} />
      <DetailItem label="Creation Date" value={data.details.creationDate} />
    </div>
    {/* Right Column from Spec */}
    <div className="space-y-4">
      <DetailItem label="CR Classification" value={data.details.crClassification} />
      <DetailItem label="Initiator" value={data.details.initiator} />
      <DetailItem label="Secondary Coordinator" value={data.details.secondaryCoordinator} />
      <DetailItem label="E-Number" value={data.details.eNumber} />
      <DetailItem label="Change Status" value={<StatusBadge status={data.details.changeStatus} />} />
      <DetailItem label="Change Reason" value={data.details.changeReason} />
      <DetailItem label="Type of Change" value={data.details.typeOfChange} />
    </div>
    {/* Full-width items */}
    <div className="md:col-span-2 space-y-4 pt-4 border-t dark:border-gray-700">
      <DetailItem label="Description" value={data.details.description} />
      <DetailItem label="Comments" value={data.details.comments} />
      <div>
        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Links</label>
        <div className="flex flex-col items-start space-y-2">
          {data.details.links.map((link, i) => (
            <a key={i} href={link.url} className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              <Link className="w-4 h-4 mr-2" />
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SupplierDetailsContent = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
    <DetailItem label="Supplier Name" value={data.supplier.name} />
    <DetailItem label="Supplier Plant" value={data.supplier.plant} />
    <DetailItem label="Supplier Coordinator" value={data.supplier.coordinator} />
    <DetailItem label="Supplier Email ID" value={data.supplier.email} />
    <DetailItem label="Supplier Coordinator Email ID" value={data.supplier.coordinatorEmail} />
  </div>
);

const AdditionalDetailsContent = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
    <DetailItem label="Implementation Date Agreed with Customer?" value={data.additionalDetails.implDateAgreed} isBoolean />
    <DetailItem label="Will Customer Change Number?" value={data.additionalDetails.customerChangeNum} isBoolean />
    <DetailItem label="Will Customer Part Number Change?" value={data.additionalDetails.customerPartNumChange} isBoolean />
    <DetailItem label="Will The Packing Change?" value={data.additionalDetails.packingChange} isBoolean />
    <DetailItem label="Is Tooling/Equipment Affected?" value={data.additionalDetails.toolingAffected} isBoolean />
    <div className="md:col-span-2">
      <DetailItem label="Affected Countries" value={data.additionalDetails.affectedCountries} />
    </div>
  </div>
);

const RelatedPartNumbersContent = ({ data }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-700">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Part Number</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Part Name</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
        {data.relatedParts.map((part, i) => (
          <tr key={i}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{part.number}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{part.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{part.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const MasterInfoCollapsedSummary = ({ data }) => (
  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Change Request</label>
      <p className="text-gray-900 dark:text-white font-semibold">{data.crName} ({data.crNumber})</p>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Supplier</label>
      <p className="text-gray-900 dark:text-white font-semibold">{data.supplier.name}</p>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Part</label>
      <p className="text-gray-900 dark:text-white font-semibold">{data.details.partName} ({data.details.supplierPartNumber})</p>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Coordinator</label>
      <p className="text-gray-900 dark:text-white font-semibold">{data.coordinator}</p>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Supplier Coordinator</label>
      <p className="text-gray-900 dark:text-white font-semibold">{data.details.supplierCoordinator}</p>
    </div>
  </div>
);

const MasterInfoAccordion = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex justify-between items-center w-full p-4 text-left"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center">
          <Info className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">General Information</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div>
        {!isExpanded && (
          <MasterInfoCollapsedSummary data={data} />
        )}
        
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[5000px]' : 'max-h-0'}`}> 
          {/* Using a large max-h value to simulate "auto" height for transition */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-6">
            
            <section>
              <h4 className="text-md font-semibold text-gray-800 dark:text-white mb-3 pb-2 border-b dark:border-gray-700 flex items-center">
                <FileText className="w-4 h-4 mr-2" /> Change Request Details
              </h4>
              <ChangeRequestDetailsContent data={data} />
            </section>

            <section>
              <h4 className="text-md font-semibold text-gray-800 dark:text-white mb-3 pb-2 border-b dark:border-gray-700 flex items-center">
                <Building className="w-4 h-4 mr-2" /> Supplier Details
              </h4>
              <SupplierDetailsContent data={data} />
            </section>

            <section>
              <h4 className="text-md font-semibold text-gray-800 dark:text-white mb-3 pb-2 border-b dark:border-gray-700 flex items-center">
                <ClipboardList className="w-4 h-4 mr-2" /> Additional Details
              </h4>
              <AdditionalDetailsContent data={data} />
            </section>

            <section>
              <h4 className="text-md font-semibold text-gray-800 dark:text-white mb-3 pb-2 border-b dark:border-gray-700 flex items-center">
                <Package className="w-4 h-4 mr-2" /> Related Part Numbers
              </h4>
              <RelatedPartNumbersContent data={data} />
            </section>

          </div>
        </div>
      </div>
    </Card>
  );
};


/**
 * The main content area with all the accordions
 */
const ChangeAccordions = ({ data }) => {
  const [activeAccordion, setActiveAccordion] = useState('risk');

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section>
      {/* --- NEW Master Info Accordion --- */}
      <MasterInfoAccordion data={data} />

      {/* --- Risk Assessment Accordion --- */}
      <AccordionItem
        id="risk"
        title="Risk Assessment"
        icon={ShieldAlert}
        isActive={activeAccordion === 'risk'}
        onToggle={toggleAccordion}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Responsible User</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Due Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Action</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Comments</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {data.riskAssessments.map((risk) => (
                <tr key={risk.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{risk.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{risk.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{risk.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><StatusBadge status={risk.status} /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{risk.action}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{risk.comments || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AccordionItem>
      
      {/* --- Action History Accordion --- */}
      <AccordionItem
        id="history"
        title="Action History"
        icon={ListOrdered}
        isActive={activeAccordion === 'history'}
        onToggle={toggleAccordion}
      >
         <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Action Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Responsible User</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Due Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {data.actionHistory.map((action) => (
                <tr key={action.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{action.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{action.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{action.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{action.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{action.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><StatusBadge status={action.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AccordionItem>
      
    </section>
  );
};


/**
 * The main App component
 */
export default function App() {
  const [data] = useState(mockChangeRequest);

  // Placeholder functions for interactivity
  const handleApprove = () => {
    // In a real app, this would trigger an API call
    console.log('Approve action triggered');
    // You could show a confirmation modal here
  };

  const handleReject = () => {
    // In a real app, this would trigger an API call
    console.log('Reject action triggered');
    // You could show a modal asking for rejection comments
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* --- Page Header --- */}
        <PageHeader
          crNumber={data.crNumber}
          crName={data.crName}
          status={data.overallStatus}
          risk={data.riskLevel}
        />
        
        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* --- Left Column (Accordions) --- */}
          <div className="lg:col-span-2">
            <ChangeAccordions data={data} />
          </div>
          
          {/* --- Right Column (Sidebar) --- */}
          <div className="lg:col-span-1">
            <StatusSidebar
              data={data}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


