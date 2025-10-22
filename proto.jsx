import React, { useState } from 'react';
import {
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
  Package,
  Globe,
  ArrowRight,
  MoreHorizontal,
} from 'lucide-react';

// --- Mock Data ---
const mockChangeRequest = {
  crNumber: 'CR-2025-00123',
  crName: 'Update Main Housing Assembly - V2',
  overallStatus: 'In Progress',
  actionStatus: 'Pending Risk Assessment',
  riskLevel: 'High',
  coordinator: 'Jane Doe',
  targetImplementationDate: '2025-12-01',
  details: {
    description: 'This change involves re-tooling the main injection mold to improve material flow and reduce defects. This will also update the material composition to standard-B.',
    comments: 'Initial review complete. Awaiting risk assessment from engineering. Tooling tests are scheduled for next week.',
    changeReason: 'Quality Improvement',
    typeOfChange: 'Material & Tooling',
    creationDate: '2025-10-20',
    links: [
      { name: 'Engineering Specs', url: '#' },
      { name: 'CAD Files', url: '#' },
    ],
  },
  stakeholders: {
    initiator: 'Alex Chen',
    buyer: 'Sarah Lee',
    supplierCoordinator: 'John Smith (ACME Corp)',
  },
  supplier: {
    name: 'ACME Corp Manufacturing',
    plant: 'ACME Plant #4 (Mexico)',
  },
  impact: {
    affectedCountries: ['USA', 'Mexico', 'Germany', 'Japan'],
    packingChange: true,
    toolingAffected: true,
    customerPartNumChange: true,
  },
  relatedParts: [
    { number: 'PN-456-V2', name: 'Main Housing Assembly (New)', description: 'New part number for updated assembly.' },
    { number: 'PN-457-V1', name: 'Mounting Bracket', description: 'No change, check fitment.' },
    { number: 'PN-458-V1', name: 'Seal Gasket', description: 'Material compatibility check required.' },
  ],
  riskAssessments: [
    { id: 1, category: 'Financial', user: 'Sarah Lee', status: 'Completed', comments: 'Cost increase within 5% tolerance.' },
    { id: 2, category: 'Technical', user: 'Alex Chen', status: 'In Progress', comments: 'Pending tooling tests.' },
    { id: 3, category: 'Supply Chain', user: 'John Smith', status: 'Pending', comments: 'Awaiting supplier capacity check.' },
  ],
  authorizers: [
    { role: 'Initiator', user: 'Alex Chen', status: 'Signed', date: '2025-10-20' },
    { role: 'Coordinator', user: 'Jane Doe', status: 'Signed', date: '2025-10-21' },
    { role: 'Risk Analyst (Tech)', user: 'Alex Chen', status: 'In Progress', date: null },
    { role: 'Risk Analyst (Finance)', user: 'Sarah Lee', status: 'Pending', date: null },
    { role: 'Final Approver', user: 'Director Ops', status: 'Not Started', date: null },
  ],
};

// --- UI Components ---

const StatusBadge = ({ status }) => {
  const statusConfig = {
    'In Progress': { icon: Clock, color: 'blue', label: 'In Progress' },
    'Signed': { icon: CheckCircle2, color: 'green', label: 'Signed' },
    'Completed': { icon: CheckCircle2, color: 'green', label: 'Completed' },
    'Pending': { icon: Clock, color: 'yellow', label: 'Pending' },
    'Rejected': { icon: XCircle, color: 'red', label: 'Rejected' },
    'Not Started': { icon: MoreHorizontal, color: 'gray', label: 'Not Started' },
  };
  const config = statusConfig[status] || statusConfig['Not Started'];
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    gray: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${colorClasses[config.color]}`}>
      <config.icon className="w-3.5 h-3.5" />
      {config.label}
    </span>
  );
};

const RiskBadge = ({ level }) => {
  const riskConfig = {
    'High': { color: 'red' },
    'Medium': { color: 'yellow' },
    'Low': { color: 'green' },
  };
  const config = riskConfig[level] || { color: 'gray' };
  const colorClasses = {
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    gray: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  };
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${colorClasses[config.color].replace('text-', 'bg-')}`}></span>
      <span className={`text-sm font-medium text-gray-800 dark:text-gray-200`}>Risk: {level}</span>
    </div>
  );
};

const Card = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-gray-800/50 shadow-sm rounded-xl border border-gray-200/80 dark:border-gray-700/60 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ title, icon, children }) => {
  const Icon = icon;
  return (
    <div className="p-4 border-b border-gray-200/80 dark:border-gray-700/60 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {Icon && <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const InfoItem = ({ label, children }) => (
  <div>
    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
    <div className="text-base font-semibold text-gray-900 dark:text-white">{children}</div>
  </div>
);

const BooleanCheckItem = ({ label, value }) => (
    <div className="flex items-center gap-2">
        {value ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
        <span className="text-base text-gray-800 dark:text-gray-200">{label}</span>
    </div>
);


// --- Page Sections ---

const PageHeader = ({ crName, crNumber, overallStatus, actionStatus }) => (
  <div className="mb-8">
    <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{crNumber}</p>
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-1">{crName}</h1>
    <div className="mt-4 flex flex-wrap items-center gap-4">
      <StatusBadge status={overallStatus} />
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
        <ArrowRight className="w-4 h-4" />
        <span className="font-semibold">{actionStatus}</span>
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:ring-offset-gray-900 flex items-center gap-2">
          <XCircle className="w-4 h-4" />
          <span>Reject</span>
        </button>
        <button className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:ring-offset-gray-900 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>Approve</span>
        </button>
      </div>
    </div>
  </div>
);

const AuthorizationTimeline = ({ authorizers }) => {
  const getStatusConfig = (status, isNext) => {
    if (isNext) return { icon: User, color: 'blue', pulse: true };
    switch (status) {
      case 'Signed': return { icon: CheckCircle2, color: 'green' };
      case 'In Progress': return { icon: Clock, color: 'blue' };
      default: return { icon: MoreHorizontal, color: 'gray' };
    }
  };

  let nextStepFound = false;

  return (
    <Card>
      <CardHeader title="Authorization Timeline" icon={ClipboardList} />
      <CardContent>
        <div className="flex items-center">
          {authorizers.map((auth, index) => {
            const isNext = !nextStepFound && auth.status !== 'Signed';
            if (isNext) nextStepFound = true;
            const config = getStatusConfig(auth.status, isNext);
            
            return (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center w-28">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-${config.color}-100 dark:bg-${config.color}-900/50 ring-4 ring-white dark:ring-gray-800 ${config.pulse ? 'animate-pulse' : ''}`}>
                    <config.icon className={`w-6 h-6 text-${config.color}-600 dark:text-${config.color}-400`} />
                  </div>
                  <p className="text-sm font-semibold mt-2 text-gray-800 dark:text-gray-200">{auth.role}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{auth.user}</p>
                  {auth.status === 'Signed' && <p className="text-xs text-green-600 dark:text-green-400 mt-1">{auth.date}</p>}
                </div>
                {index < authorizers.length - 1 && (
                  <div className={`flex-1 h-1 ${auth.status === 'Signed' ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

const KeyDetailsCard = ({ data }) => (
  <Card>
    <CardHeader title="Key Details" icon={Info} />
    <CardContent className="space-y-4">
      <InfoItem label="Coordinator">{data.coordinator}</InfoItem>
      <InfoItem label="Target Implementation">{data.targetImplementationDate}</InfoItem>
      <InfoItem label="Change Reason">{data.details.changeReason}</InfoItem>
      <InfoItem label="Type of Change">{data.details.typeOfChange}</InfoItem>
      <InfoItem label="Creation Date">{data.details.creationDate}</InfoItem>
    </CardContent>
  </Card>
);

const StakeholdersCard = ({ data }) => (
  <Card>
    <CardHeader title="Stakeholders" icon={Users} />
    <CardContent className="space-y-4">
      <InfoItem label="Initiator">{data.stakeholders.initiator}</InfoItem>
      <InfoItem label="Buyer">{data.stakeholders.buyer}</InfoItem>
      <InfoItem label="Supplier">{data.supplier.name} ({data.supplier.plant})</InfoItem>
      <InfoItem label="Supplier Coordinator">{data.stakeholders.supplierCoordinator}</InfoItem>
    </CardContent>
  </Card>
);

const DescriptionCard = ({ data }) => (
    <Card>
        <CardHeader title="Description & Justification" icon={FileText} />
        <CardContent className="space-y-4">
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Description</p>
                <p className="text-base text-gray-800 dark:text-gray-200">{data.details.description}</p>
            </div>
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Comments</p>
                <p className="text-base text-gray-800 dark:text-gray-200">{data.details.comments}</p>
            </div>
            <div className="flex items-center gap-4 pt-2">
                {data.details.links.map(link => (
                    <a key={link.name} href={link.url} className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                        <Link className="w-4 h-4" />
                        {link.name}
                    </a>
                ))}
            </div>
        </CardContent>
    </Card>
);

const RiskAssessmentCard = ({ risks, overallRisk }) => (
    <Card>
        <CardHeader title="Risk Assessment" icon={ShieldAlert}>
            <RiskBadge level={overallRisk} />
        </CardHeader>
        <CardContent>
            <ul className="space-y-3">
                {risks.map(risk => (
                    <li key={risk.id} className="flex items-start gap-3">
                        <div className="w-1/3">
                            <p className="font-semibold text-gray-800 dark:text-gray-200">{risk.category}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{risk.user}</p>
                        </div>
                        <div className="w-2/3 flex items-center gap-2">
                            <StatusBadge status={risk.status} />
                            <p className="text-sm text-gray-600 dark:text-gray-300 truncate" title={risk.comments}>{risk.comments}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </CardContent>
    </Card>
);

const ImpactCard = ({ data }) => (
    <Card>
        <CardHeader title="Business & Operational Impact" icon={Globe} />
        <CardContent className="space-y-4">
            <BooleanCheckItem label="Tooling Affected" value={data.impact.toolingAffected} />
            <BooleanCheckItem label="Packing Change" value={data.impact.packingChange} />
            <BooleanCheckItem label="Customer Part # Change" value={data.impact.customerPartNumChange} />
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Affected Countries</p>
                <div className="flex flex-wrap gap-2">
                    {data.impact.affectedCountries.map(country => (
                        <span key={country} className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                            {country}
                        </span>
                    ))}
                </div>
            </div>
        </CardContent>
    </Card>
);

const RelatedPartsTable = ({ parts }) => (
    <Card>
        <CardHeader title="Related Part Numbers" icon={Package} />
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-50 dark:bg-gray-900/20 text-gray-500 dark:text-gray-400">
                    <tr>
                        <th className="px-4 py-2 font-medium">Part Number</th>
                        <th className="px-4 py-2 font-medium">Part Name</th>
                        <th className="px-4 py-2 font-medium">Description</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/80 dark:divide-gray-700/60">
                    {parts.map((part, i) => (
                        <tr key={i}>
                            <td className="px-4 py-3 font-mono text-blue-600 dark:text-blue-400">{part.number}</td>
                            <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{part.name}</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{part.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Card>
);


// --- Main App Component ---
export default function App() {
  const [data] = useState(mockChangeRequest);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-screen-2xl mx-auto">
        
        <PageHeader 
          crName={data.crName}
          crNumber={data.crNumber}
          overallStatus={data.overallStatus}
          actionStatus={data.actionStatus}
        />

        <div className="space-y-8">
          <AuthorizationTimeline authorizers={data.authorizers} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <DescriptionCard data={data} />
              <RelatedPartsTable parts={data.relatedParts} />
            </div>
            <div className="space-y-8">
              <KeyDetailsCard data={data} />
              <StakeholdersCard data={data} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RiskAssessmentCard risks={data.riskAssessments} overallRisk={data.riskLevel} />
              <ImpactCard data={data} />
          </div>
        </div>

      </div>
    </div>
  );
}