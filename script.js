const state = {
    crNumber: "CR-2025-00123",
    crName: "Update Main Housing Assembly - V2",
    overallStatus: "In Progress",
    users: ["Alex Chen", "Sarah Lee", "John Smith", "Jane Doe", "Mike Brown", "Director Ops", "QA Lead"],
    riskLevels: ["Critical", "High", "Medium", "Low"],
    statuses: ["In Progress", "Completed", "Pending", "Not Started"],
    unreadConversations: 2,
    statusHistory: [
        { status: "In Progress", date: "2025-10-22", user: "Jane Doe" },
        { status: "Initiated", date: "2025-10-20", user: "Alex Chen" }
    ],
    details: {
        isExpanded: false,
        collapsed: { supplierName: "ACME Corp Manufacturing", supplierCode: "ACM-001", partName: "Main Housing Assembly", partNumber: "PN-456-V1", coordinator: "Jane Doe", supplierCoordinator: "John Smith" },
        basicInfo: {
            left: { crNumber: "CR-2025-00123", supplierChangeNumber: "SCN-98765", supplierPartNumber: "PN-456-V1", partName: "Main Housing Assembly", partRevision: "V1", customer: "Global Motors Inc.", coordinator: "Jane Doe", buyer: "Sarah Lee", creationDate: "2025-10-20", categoryType: "Product", changeReason: "Quality Improvement", proposedChange: "This change involves re-tooling the main injection mold to improve material flow and reduce defects.", comments: "Initial review complete. Awaiting risk assessment from engineering." },
            right: { crName: "Update Main Housing Assembly - V2", program: "Model G - Drivetrain", eNumber: "E-102938", partClassification: "Major Component", initiator: "Alex Chen", secondaryCoordinator: "Mike Brown", changeCategory: "Tooling", targetImplementationDate: "2025-12-01", materialStatus: "Production", links: [{ name: "Engineering Specs", url: "#" }, { name: "CAD Files", url: "#" }] } 
        },
        supplierDetails: { supplier: "ACME Corp Manufacturing (ACM-001)", supplierCoordinator: "John Smith", supplierLocation: "Guadalajara, Mexico", supplierPlant: "ACME Plant #4", supplierCoordinatorEmail: "john.smith@acme.com" },
        additionalDetails: [
            { label: "Is Commercial Impact?", value: true, description: "Cost increase is projected to be 3.5%." },
            { label: "Is Customer Impact?", value: true, description: "Customer must validate the new part." },
            { label: "Implementation Date Agreed with Customer?", value: false, description: "" },
            { label: "Will Supplier Part Number Change?", value: true, description: "New part number will be PN-456-V2." },
            { label: "Will Customer Part Number Change?", value: true, description: "" },
            { label: "Will Material Change?", value: true, description: "Material composition updated to standard-B." },
            { label: "Is Tooling Affected?", value: true, description: "Requires new mold insert." },
            { label: "Is Software/Firmware Affected?", value: false, description: "" }
        ],
        relatedParts: [
            { number: "PN-456-V1-SUB1", name: "Sub-assembly A", revision: "V1" },
            { number: "PN-456-V1-SUB2", name: "Sub-assembly B", revision: "V1" },
            { number: "PN-456-V1-SUB3", name: "Sub-assembly C", revision: "V1" },
            { number: "PN-456-V1-SUB4", name: "Sub-assembly D", revision: "V1" },
            { number: "PN-456-V1-SUB5", name: "Sub-assembly E", revision: "V1" },
            { number: "PN-456-V1-SUB6", name: "Sub-assembly F", revision: "V1" },
            { number: "PN-456-V1-SUB7", name: "Sub-assembly G", revision: "V1" },
            { number: "PN-456-V1-SUB8", name: "Sub-assembly H", revision: "V1" },
            { number: "PN-456-V1-SUB9", name: "Sub-assembly I", revision: "V1" },
            { number: "PN-456-V1-SUB10", name: "Sub-assembly J", revision: "V1" },
            { number: "PN-456-V1-SUB11", name: "Sub-assembly K", revision: "V1" },
            { number: "PN-456-V1-SUB12", name: "Sub-assembly L", revision: "V1" },
        ]
    },
    riskAssessment: {
        activeTab: 'assessment',
        selected: [],
        editing: null, // { categoryId: null, field: null }
        expandedAttachments: [],
        groups: [
            { name: "Design & Technical Risk", applicable: true, categories: [
                { id: 1, category: "Feasibility", responsible: "Alex Chen", dueDate: "2025-11-15", risk: "Medium", status: "In Progress", rating: 4, weightage: 40, comments: "Tooling tests pending.", attachments: [{id: 1, name: 'spec-v1.pdf'}, {id: 2, name: 'test-plan.docx'}], history: [], actionItems: 2 },
                { id: 2, category: "Material Spec", responsible: "Alex Chen", dueDate: "2025-11-18", risk: "Low", status: "Pending", rating: 2, weightage: 20, comments: "Material spec needs to be confirmed with the supplier and updated in the system.", attachments: [], history: [], actionItems: 0 }
            ]},
            { name: "Financial & Commercial Risk", applicable: true, categories: [
                { id: 3, category: "Cost Analysis", responsible: "Sarah Lee", dueDate: "2025-11-10", risk: "Low", status: "Completed", rating: 2, weightage: 30, comments: "Cost increase within 5% tolerance.", attachments: [{id: 3, name: 'cost-analysis.xlsx'}], history: [], actionItems: 0 }
            ]},
            { name: "Logistics", applicable: false, categories: [
                { id: 4, category: "Supply Chain", responsible: "John Smith", dueDate: "2025-11-20", risk: "High", status: "Pending", rating: 0, weightage: 10, comments: "", attachments: [], history: [], actionItems: 0 }
            ]}] 
    },
    actionItems: [
        { id: 1, assessmentCategory: "Cost Analysis", name: "Finalize budget report", responsible: "Sarah Lee", dueDate: "2025-11-12", status: "Completed" },
        { id: 2, assessmentCategory: "Feasibility", name: "Begin tooling tests", responsible: "Alex Chen", dueDate: "2025-11-18", status: "In Progress" },
        { id: 3, assessmentCategory: "Feasibility", name: "Validate material compatibility", responsible: "Alex Chen", dueDate: "2025-11-22", status: "Pending" }
    ],
    authorization: {
        template: "Standard Engineering Change",
        templates: {
            "Standard Engineering Change": [
                { level: 1, role: "Initiator" }, { level: 2, role: "Coordinator" }, { level: 3, role: "Risk Analyst (Tech)" }, { level: 3, role: "Risk Analyst (Finance)" }, { level: 4, role: "Final Approver" }
            ],
            "Fast-Track Minor Change": [
                { level: 1, role: "Initiator" }, { level: 2, role: "Coordinator" }, { level: 3, role: "QA Lead" }, { level: 4, role: "Final Approver" }
            ],
        },
        roles: [
            { level: 1, role: "Initiator", user: "Alex Chen", status: "Signed", signature: "A.C.", date: "2025-10-20", method: "typed" },
            { level: 2, role: "Coordinator", user: "Jane Doe", status: "Signed", signature: "J.D.", date: "2025-10-21", method: "draw" },
            { level: 3, role: "Risk Analyst (Tech)", user: "", status: "Not Started", signature: "", date: "", method: "" },
            { level: 3, role: "Risk Analyst (Finance)", user: "", status: "Not Started", signature: "", date: "", method: "" },
            { level: 4, role: "Final Approver", user: "", status: "Not Started", signature: "", date: "", method: "" },
        ],
        searchQuery: '',
        showFindMe: false,
        activeFilter: 'Total Count'
    },
    conversation: [
        { user: "Jane Doe", avatar: "https://i.pravatar.cc/40?u=jane", text: "Initial review is done. @Alex Chen can you please prioritize the feasibility study?", time: "2 hours ago" },
        { user: "Alex Chen", avatar: "https://i.pravatar.cc/40?u=alex", text: "Understood. Tooling tests are scheduled for next week. I'll update the risk assessment as soon as I have the preliminary results.", time: "1 hour ago" }
    ],
    panels: {
        conversation: false,
        history: false,
    },
    modals: {
        actionItem: false,
        signature: false,
        bulkActionsOpen: null
    },
    isDocumentAccordionOpen: false,
    loggedInUser: "Jane Doe"
};

const render = () => {
    const root = document.getElementById('root');
    const focusedElement = document.activeElement;
    const focusedId = focusedElement ? focusedElement.dataset.id : null;
    const focusedField = focusedElement ? focusedElement.dataset.field : null;

    root.innerHTML = App(state);

    if (focusedId && focusedField) {
        const newFocus = root.querySelector(`[data-id='${focusedId}'][data-field='${focusedField}']`);
        if (newFocus) {
            newFocus.focus();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    render();

    document.body.addEventListener('click', (e) => {
        // Close bulk action dropdowns if clicking outside
        if (!e.target.closest('.bulk-action-dropdown-container')) {
            state.modals.bulkActionsOpen = null;
        }

        if (e.target.closest('[data-action="toggle-details"]')) {
            state.details.isExpanded = !state.details.isExpanded;
        }
        if (e.target.closest('[data-action="toggle-conversation"]')) {
            state.panels.conversation = !state.panels.conversation;
        }
        if (e.target.closest('[data-action="toggle-history"]')) {
            state.panels.history = !state.panels.history;
        }
        if (e.target.closest('[data-action="close-panel"]')) {
            const panel = e.target.closest('[data-panel]').dataset.panel;
            state.panels[panel] = false;
        }
        if (e.target.closest('[data-action="toggle-document-accordion"]')) {
            state.isDocumentAccordionOpen = !state.isDocumentAccordionOpen;
        }
        if (e.target.closest('[data-action="toggle-attachments"]')) {
            const id = parseInt(e.target.closest('[data-action="toggle-attachments"]').dataset.id, 10);
            const index = state.riskAssessment.expandedAttachments.indexOf(id);
            if (index > -1) {
                state.riskAssessment.expandedAttachments.splice(index, 1);
            } else {
                state.riskAssessment.expandedAttachments.push(id);
            }
        }
        if (e.target.closest('[data-action="set-risk-tab"]')) {
            state.riskAssessment.activeTab = e.target.closest('[data-action="set-risk-tab"]').dataset.tab;
        }
        if (e.target.closest('[data-action="toggle-assessment-item"]')) {
            const id = parseInt(e.target.closest('[data-action="toggle-assessment-item"]').dataset.id, 10);
            const index = state.riskAssessment.selected.indexOf(id);
            if (index > -1) {
                state.riskAssessment.selected.splice(index, 1);
            } else {
                state.riskAssessment.selected.push(id);
            }
        }
        if (e.target.closest('[data-action="toggle-group-applicability"]')) {
            const groupName = e.target.closest('[data-action="toggle-group-applicability"]').dataset.group;
            const group = state.riskAssessment.groups.find(g => g.name === groupName);
            if (group) {
                group.applicable = !group.applicable;
            }
        }
        if (e.target.closest('[data-action="toggle-assessment-group"]')) {
            const groupName = e.target.closest('[data-action="toggle-assessment-group"]').dataset.group;
            const group = state.riskAssessment.groups.find(g => g.name === groupName);
            if (group) {
                const categoryIds = group.categories.map(c => c.id);
                const allSelectedInGroup = categoryIds.every(id => state.riskAssessment.selected.includes(id));
                if (allSelectedInGroup) {
                    state.riskAssessment.selected = state.riskAssessment.selected.filter(id => !categoryIds.includes(id));
                } else {
                    const toAdd = categoryIds.filter(id => !state.riskAssessment.selected.includes(id));
                    state.riskAssessment.selected.push(...toAdd);
                }
            }
        }
        if (e.target.closest('[data-action="toggle-all-assessments"]')) {
            const allIds = state.riskAssessment.groups.flatMap(g => g.categories.map(c => c.id));
            if (state.riskAssessment.selected.length === allIds.length) {
                state.riskAssessment.selected = [];
            } else {
                state.riskAssessment.selected = allIds;
            }
        }
        if (e.target.closest('td[data-field]')) {
            const Td = e.target.closest('td[data-field]');
            const categoryId = parseInt(Td.dataset.id, 10);
            const field = Td.dataset.field;
            state.riskAssessment.editing = { categoryId, field };
        }
        if (e.target.closest('[data-action="open-bulk-actions"]')) {
            const action = e.target.closest('[data-action="open-bulk-actions"]').dataset.actionType;
            state.modals.bulkActionsOpen = state.modals.bulkActionsOpen === action ? null : action;
        }
        if (e.target.closest('[data-action="bulk-update"]')) {
            const field = e.target.closest('[data-action="bulk-update"]').dataset.field;
            const value = e.target.closest('[data-action="bulk-update"]').dataset.value;
            state.riskAssessment.selected.forEach(id => {
                const category = state.riskAssessment.groups.flatMap(g => g.categories).find(c => c.id === id);
                if (category) {
                    category[field] = value;
                }
            });
            state.modals.bulkActionsOpen = null;
        }
        if (e.target.closest('[data-action="set-auth-filter"]')) {
            state.authorization.activeFilter = e.target.closest('[data-action="set-auth-filter"]').dataset.filter;
        }
        if (e.target.closest('[data-action="toggle-find-me"]')) {
            state.authorization.showFindMe = !state.authorization.showFindMe;
        }

        render();
    });

    document.body.addEventListener('input', (e) => {
        if (e.target.matches('[data-action="search-auth"]')) {
            state.authorization.searchQuery = e.target.value;
            render();
        }
    });

    document.body.addEventListener('change', (e) => {
        if (e.target.matches('[data-action="update-field"]')) {
            const id = parseInt(e.target.dataset.id, 10);
            const field = e.target.dataset.field;
            let value = e.target.value;

            if (e.target.type === 'number') {
                value = parseInt(value, 10);
            }

            const category = state.riskAssessment.groups
                .flatMap(g => g.categories)
                .find(c => c.id === id);

            if (category) {
                if (field === 'rating-weightage') {
                    const [rating, weightage] = value.split('/').map(s => parseInt(s.trim(), 10));
                    category.rating = rating;
                    category.weightage = weightage;
                } else {
                    category[field] = value;
                }
            }
            render();
        }

        if (e.target.matches('[data-action="assign-user"]')) {
            const role = e.target.dataset.role;
            const user = e.target.value;
            const authRole = state.authorization.roles.find(r => r.role === role);
            if(authRole) {
                authRole.user = user;
            }
            render();
        }
    });

    document.body.addEventListener('blur', (e) => {
        if (e.target.matches('[data-action="update-field"]')) {
            state.riskAssessment.editing = null;
            render();
        }
    }, true);
});

const App = (data) => `
    <div class="flex flex-col h-screen">
        ${RiskMeter()}
        ${PageHeader(data)}
        <main class="flex-grow overflow-y-auto p-4">
            <div class="max-w-full mx-auto space-y-6">
                ${DetailsCard(data.details)}
                ${RiskAndActionsCard(data)}
            </div>
        </main>
        ${SlidingPanel('conversation', "Conversation", ConversationCard(data.conversation), data.panels.conversation)}
        ${SlidingPanel('history', "Status History", StatusHistoryCard(data.statusHistory), data.panels.history)}
    </div>
`;

const RiskMeter = () => `
    <div class="fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <div class="bg-white rounded-full shadow-lg p-2">
            <div class="w-16 h-16 flex items-center justify-center">
                <svg class="w-full h-full" viewBox="0 0 36 36">
                    <path class="text-gray-200"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke-width="4" />
                    <path class="text-red-500"
                        stroke-dasharray="75, 100"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke-width="4"
                        stroke-linecap="round" />
                    <text x="18" y="22" text-anchor="middle" class="text-lg font-bold fill-current text-red-500">75</text>
                </svg>
            </div>
        </div>
    </div>
`;

const PageHeader = (data) => `
    <div class="p-4 bg-gray-50/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-30">
        <div class="max-w-full mx-auto flex justify-between items-center">
            <div>
                <p class="text-sm text-gray-500">${data.crNumber}</p>
                <h1 class="text-2xl font-bold text-gray-900">${data.crName}</h1>
            </div>
            <div class="flex items-center gap-2">
                <div class="flex items-center gap-2 p-2 rounded-lg bg-gray-100 border">
                    <span class="text-sm font-medium text-gray-600">Overall Status:</span>
                    ${StatusBadge(data.overallStatus)}
                </div>
                <button class="px-3 py-1.5 rounded-md font-semibold text-xs inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Approve</button>
                <div class="h-8 border-l border-gray-300 mx-2"></div>
                <div class="relative">
                    <button data-action="toggle-conversation" class="bg-transparent text-gray-500 hover:text-primary-600 hover:bg-primary-50 px-3 py-1.5 rounded-md font-semibold text-xs inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </button>
                    ${data.unreadConversations > 0 ? `<span class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>` : ''}
                </div>
                <button data-action="toggle-history" class="bg-transparent text-gray-500 hover:text-primary-600 hover:bg-primary-50 px-3 py-1.5 rounded-md font-semibold text-xs inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
        </div>
    </div>
`;

const DetailsCard = (data) => `
    <div class="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div class="p-4 border-b border-gray-200 flex justify-between items-center">
            <div class="flex items-center gap-3">
                <h2 class="text-lg font-semibold text-gray-800">Details</h2>
            </div>
            <button data-action="toggle-details" class="px-3 py-1.5 rounded-md font-semibold text-xs inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400">
                ${data.isExpanded ? "Collapse" : "Expand"}
            </button>
        </div>
        ${data.isExpanded ? ExpandedDetails(data) : CollapsedDetails(data)}
    </div>
`;

const CollapsedDetails = (data) => `
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4">
        ${InfoItem("Change Request", `${data.basicInfo.right.crName} (${data.basicInfo.left.crNumber})`)}
        ${InfoItem("Supplier", `${data.collapsed.supplierName} (${data.collapsed.supplierCode})`)}
        ${InfoItem("Part", `${data.collapsed.partName} (${data.collapsed.partNumber})`)}
        ${InfoItem("Coordinator", data.collapsed.coordinator)}
        ${InfoItem("Supplier Coordinator", data.collapsed.supplierCoordinator)}
    </div>
`;

const ExpandedDetails = (data) => `
    <div class="fade-in border-t border-gray-200 p-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <div>
                    <h3 class="text-xs font-semibold uppercase text-gray-400 mb-2">Basic Information</h3>
                    ${Object.entries(data.basicInfo.left).map(([k, v]) => InfoItem(k.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()), v)).join('')}
                </div>
                <div>
                    <h3 class="text-xs font-semibold uppercase text-gray-400 mb-2 invisible">Basic Information</h3>
                    ${Object.entries(data.basicInfo.right).map(([k, v]) => InfoItem(k.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()), Array.isArray(v) ? v.map(l => l.name).join(', ') : v)).join('')}
                </div>
            </div>
            <div class="lg:col-span-1">
                <div>
                    <h3 class="text-xs font-semibold uppercase text-gray-400 mb-2">Supplier Details</h3>
                    ${Object.entries(data.supplierDetails).map(([k, v]) => InfoItem(k.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()), v)).join('')}
                </div>
                <div class="mt-4">
                    <h3 class="text-xs font-semibold uppercase text-gray-400 mb-2">Related Part Number</h3>
                    <div class="max-h-48 overflow-y-auto border rounded-md">
                        <table class="w-full text-sm">
                            <tbody>
                                ${data.relatedParts.map(p => `
                                    <tr class="border-b border-gray-100 last:border-b-0">
                                        <td class="p-1.5 font-mono text-primary-600">${p.number}</td>
                                        <td class="p-1.5">${p.name}</td>
                                        <td class="p-1.5 text-gray-500">Rev ${p.revision}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 border-t border-gray-200 mt-4 pt-4">
            <div class="lg:col-span-2">
                <h3 class="text-xs font-semibold uppercase text-gray-400 mb-2">Additional Details</h3>
                <div class="grid grid-cols-2 gap-2">
                    ${data.additionalDetails.map(item => BoolInfoItem(item.label, item.value, item.description)).join('')}
                </div>
            </div>
        </div>
    </div>
`;

const InfoItem = (label, value) => `
    <div class="mb-1">
        <p class="text-xs text-gray-500">${label}</p>
        <p class="text-sm font-medium text-gray-800 break-words">${value || '-'}</p>
    </div>
`;

const BoolInfoItem = (label, value, description) => `
    <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full ${value ? 'bg-green-500' : 'bg-red-500'}"></span>
        <p class="text-sm font-medium text-gray-800">${label}</p>
        ${description ? `
            <div class="tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 cursor-pointer"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <span class="tooltip-text">${description}</span>
            </div>
        ` : ''}
    </div>
`;

const RiskAndActionsCard = (data) => `
    <div class="bg-white border border-gray-200 rounded-lg shadow-sm relative">
        ${AssessmentActions(data)}
        <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-6 px-4" aria-label="Tabs">
                <button data-action="set-risk-tab" data-tab="assessment" class="${data.riskAssessment.activeTab === 'assessment' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm">Assessment</button>
                <button data-action="set-risk-tab" data-tab="actions" class="${data.riskAssessment.activeTab === 'actions' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm">Action Items</button>
                <button data-action="set-risk-tab" data-tab="authorization" class="${data.riskAssessment.activeTab === 'authorization' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm">Authorization</button>
            </nav>
        </div>
        ${data.riskAssessment.activeTab === 'assessment' ? AssessmentTab(data) : 
          data.riskAssessment.activeTab === 'actions' ? ActionItemsTab(data) : 
          AuthorizationTab(data)}
    </div>
`;

const AssessmentActions = (data) => {
    const { riskAssessment, users, riskLevels, statuses } = data;
    const selectedCount = riskAssessment.selected.length;
    if (selectedCount === 0) return '';

    return `
        <div class="absolute top-0 left-0 right-0 bg-primary-50 border-b border-primary-200 z-20 p-2 flex items-center justify-between animate-fade-in-down">
            <span class="font-semibold text-sm text-primary-700">${selectedCount} item${selectedCount > 1 ? 's' : ''} selected</span>
            <div class="flex items-center gap-2">
                ${BulkActionDropdown('responsible', 'Assign User', users, data.modals.bulkActionsOpen === 'responsible')}
                ${BulkActionDropdown('dueDate', 'Set Due Date', [], data.modals.bulkActionsOpen === 'dueDate', true)}
                ${BulkActionDropdown('status', 'Change Status', statuses, data.modals.bulkActionsOpen === 'status')}
                ${BulkActionDropdown('risk', 'Update Risk', riskLevels, data.modals.bulkActionsOpen === 'risk')}
                <div class="h-6 border-l border-gray-300 mx-1"></div>
            </div>
        </div>
    `;
}

const BulkActionDropdown = (type, label, options, isOpen, isDate = false) => `
    <div class="relative bulk-action-dropdown-container">
        <button data-action="open-bulk-actions" data-action-type="${type}" class="px-3 py-1.5 rounded-md font-semibold text-xs inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 w-36 justify-between">
            ${label}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        ${isOpen ? `
            <div class="absolute top-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                ${isDate ? 
                    `<div class="p-2"><input type="date" data-action="bulk-update" data-field="dueDate" class="w-full border-gray-300 rounded-md shadow-sm text-sm"></div>` : 
                    options.map(option => `<a href="#" data-action="bulk-update" data-field="${type}" data-value="${option}" class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100">${option}</a>`).join('')
                }
            </div>
        ` : ''}
    </div>
`;

const AssessmentTab = (data) => {
    const { riskAssessment, users, riskLevels, statuses, isDocumentAccordionOpen } = data;
    const allIds = riskAssessment.groups.flatMap(g => g.categories.map(c => c.id));
    const allSelected = riskAssessment.selected.length > 0 && riskAssessment.selected.length === allIds.length;

    return `
    <div class="overflow-x-auto pt-12">
        <table class="w-full text-sm">
            <thead class="bg-gray-50">
                <tr class="text-left text-gray-600">
                    <th class="p-3 w-4"><input type="checkbox" data-action="toggle-all-assessments" class="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50" ${allSelected ? 'checked' : ''}></th>
                    <th class="p-3 font-semibold">Sl.No</th>
                    <th class="p-3 font-semibold min-w-[250px]">Assessment Category</th>
                    <th class="p-3 font-semibold">Resp. User</th>
                    <th class="p-3 font-semibold">Due Date</th>
                    <th class="p-3 font-semibold">Risk Level</th>
                    <th class="p-3 font-semibold">Weightage</th>
                    <th class="p-3 font-semibold">Attachments</th>
                    <th class="p-3 font-semibold">Action Items</th>
                    <th class="p-3 font-semibold">History</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                ${riskAssessment.groups.map((group, groupIndex) => {
                    const groupCategoryIds = group.categories.map(c => c.id);
                    const allSelectedInGroup = groupCategoryIds.length > 0 && groupCategoryIds.every(id => riskAssessment.selected.includes(id));
                    return `
                    <tr class="bg-gray-50 hover:bg-gray-100">
                        <td class="p-2 w-4"><input type="checkbox" data-action="toggle-assessment-group" data-group="${group.name}" class="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50" ${allSelectedInGroup ? 'checked' : ''}></td>
                        <td class="p-2 text-gray-800 font-bold">${groupIndex + 1}</td>
                        <td colSpan="8" class="p-2 text-gray-800 font-bold flex justify-between items-center">
                            <span>${group.name}</span>
                            <a href="#" data-action="toggle-group-applicability" data-group="${group.name}" class="text-xs font-medium text-gray-500 hover:text-primary-600">${group.applicable ? "Mark as N/A" : "Mark as Applicable"}</a>
                        </td>
                    </tr>
                    ${group.applicable ? group.categories.map((cat, catIndex) => {
                        const isSelected = riskAssessment.selected.includes(cat.id);
                        const isEditing = riskAssessment.editing && riskAssessment.editing.categoryId === cat.id;
                        return `
                        <tr class="hover:bg-gray-50 ${isSelected ? 'bg-primary-50' : ''}">
                            <td class="p-3 w-4"><input type="checkbox" data-action="toggle-assessment-item" data-id="${cat.id}" class="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50" ${isSelected ? 'checked' : ''}></td>
                            <td class="p-3 font-medium text-gray-900">${groupIndex + 1}.${catIndex + 1}</td>
                            <td class="p-3 font-medium text-gray-900">
                                <div>${cat.category}</div>
                                <textarea data-action="update-field" data-id="${cat.id}" data-field="comments" class="w-full text-xs text-gray-500 border-gray-200 rounded-md mt-1 p-1 inline-textarea" placeholder="Add a comment...">${cat.comments}</textarea>
                            </td>
                            <td class="p-3" data-field="responsible" data-id="${cat.id}">
                                ${isEditing && riskAssessment.editing.field === 'responsible' ? 
                                    `<select data-action="update-field" data-id="${cat.id}" data-field="responsible" class="w-full border-gray-300 rounded-md shadow-sm text-sm">
                                        ${users.map(u => `<option value="${u}" ${u === cat.responsible ? 'selected' : ''}>${u}</option>`).join('')}
                                    </select>` : 
                                    Avatar(cat.responsible)
                                }
                            </td>
                            <td class="p-3" data-field="dueDate" data-id="${cat.id}">
                                ${isEditing && riskAssessment.editing.field === 'dueDate' ? 
                                    `<input type="date" value="${cat.dueDate}" data-action="update-field" data-id="${cat.id}" data-field="dueDate" class="w-full border-gray-300 rounded-md shadow-sm text-sm">` : 
                                    cat.dueDate
                                }
                            </td>
                            <td class="p-3" data-field="risk" data-id="${cat.id}">
                                ${isEditing && riskAssessment.editing.field === 'risk' ? 
                                    `<select data-action="update-field" data-id="${cat.id}" data-field="risk" class="w-full border-gray-300 rounded-md shadow-sm text-sm">
                                        ${riskLevels.map(r => `<option value="${r}" ${r === cat.risk ? 'selected' : ''}>${r}</option>`).join('')}
                                    </select>` : 
                                    RiskBadge(cat.risk)
                                }
                            </td>
                            <td class="p-3" data-field="weightage" data-id="${cat.id}">
                                ${isEditing && riskAssessment.editing.field === 'weightage' ? 
                                    `<input type="text" value="${cat.weightage}" data-action="update-field" data-id="${cat.id}" data-field="weightage" class="w-full border-gray-300 rounded-md shadow-sm text-sm">` : 
                                    cat.weightage
                                }
                            </td>
                            <td class="p-3">${AttachmentsCell(cat.attachments, cat.id, data.isDocumentAccordionOpen)}</td>
                            <td class="p-3">${ActionItemsCell(cat.actionItems)}</td>
                            <td class="p-3">${HistoryCell(cat.history)}</td>
                        </tr>
                    `}).join('') : '<tr><td colSpan="10" class="p-4 text-center text-gray-500">This group is not applicable.</td></tr>'}`
                }).join('')}
            </tbody>
        </table>
    </div>
`;}

const ActionItemsTab = (data) => `
    <div class="p-4">
        <table class="w-full text-sm">
            <thead class="bg-gray-50">
                <tr class="text-left text-gray-500">
                    <th class="p-2">#</th>
                    <th class="p-2">Assessment Category</th>
                    <th class="p-2">Action Name</th>
                    <th class="p-2">Responsible User</th>
                    <th class="p-2">Due Date</th>
                    <th class="p-2">Status</th>
                    <th class="p-2">History/Update Log</th>
                </tr>
            </thead>
            <tbody>
                ${data.actionItems.map(item => `
                    <tr class="border-t border-gray-200">
                        <td class="p-2 font-medium">${item.id}</td>
                        <td class="p-2">${item.assessmentCategory}</td>
                        <td class="p-2">${item.name}</td>
                        <td class="p-2">${item.responsible}</td>
                        <td class="p-2">${item.dueDate}</td>
                        <td class="p-2">${StatusBadge(item.status)}</td>
                        <td class="p-2 text-center">
                            <button class="bg-transparent text-gray-500 hover:text-primary-600 hover:bg-primary-50 !p-1 px-3 py-1.5 rounded-md font-semibold text-xs inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><path d="M12 7v5l4 2"></path></svg>
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    </div>
`;

const AuthorizationTab = (data) => {
    const { authorization, loggedInUser } = data;
    const { roles, searchQuery, showFindMe, activeFilter } = authorization;

    const kpis = {
        "Total Count": roles.length,
        "Requested": roles.filter(r => r.status === 'Not Started').length,
        "Approved": roles.filter(r => r.status === 'Signed').length,
        "Rejected": roles.filter(r => r.status === 'Rejected').length,
    };

    const filteredRoles = roles.filter(role => {
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = !searchQuery || 
            role.role.toLowerCase().includes(searchLower) || 
            role.user.toLowerCase().includes(searchLower);

        const matchesFindMe = !showFindMe || role.user === loggedInUser;

        const matchesFilter = activeFilter === 'Total Count' ||
            (activeFilter === 'Requested' && role.status === 'Not Started') ||
            (activeFilter === 'Approved' && role.status === 'Signed') ||
            (activeFilter === 'Rejected' && role.status === 'Rejected');

        return matchesSearch && matchesFindMe && matchesFilter;
    });

    return `
        <div class="p-4">
            <div class="grid grid-cols-4 gap-4 mb-4">
                ${Object.entries(kpis).map(([key, value]) => KpiTile(key, value, activeFilter === key)).join('')}
            </div>
            <div class="flex justify-between items-center mb-4">
                <div class="w-1/2">
                    <input type="text" data-action="search-auth" value="${searchQuery}" placeholder="Search by role or user..." class="w-full border-gray-300 rounded-md shadow-sm text-sm">
                </div>
                <div class="flex items-center">
                    <input type="checkbox" id="findMeToggle" data-action="toggle-find-me" class="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50" ${showFindMe ? 'checked' : ''}>
                    <label for="findMeToggle" class="ml-2 text-sm font-medium text-gray-700">Find Me</label>
                </div>
            </div>
            <div class="space-y-2">
                ${filteredRoles.map(r => `
                    <div class="border rounded-lg p-2">
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <label class="text-xs text-gray-500">Level</label>
                                <p class="font-medium">${r.level}</p>
                            </div>
                            <div>
                                <label class="text-xs text-gray-500">Role</label>
                                <p class="font-medium">${r.role}</p>
                            </div>
                            <div class="col-span-2">
                                <label class="text-xs text-gray-500">Assigned User</label>
                                <select data-action="assign-user" data-role="${r.role}" class="w-full border-gray-300 rounded-md shadow-sm text-sm mt-1">
                                    <option value="">Select User</option>
                                    ${data.users.map(u => `<option value="${u}" ${u === r.user ? 'selected' : ''}>${u}</option>`).join('')}
                                </select>
                            </div>
                            <div>
                                <label class="text-xs text-gray-500">Status</label>
                                <p>${StatusBadge(r.status)}</p>
                            </div>
                            <div>
    .                            <label class="text-xs text-gray-500">Signature</label>
                                <p class="font-mono text-sm">${r.signature || '-'}</p>
                            </div>
                            <div>
                                <label class="text-xs text-gray-500">Date</label>
                                <p class="text-gray-500">${r.date}</p>
                            </div>
                            <div class="text-right self-end">
                                ${r.user === data.loggedInUser && r.status === 'Pending' ? `<button class="px-3 py-1.5 rounded-md font-semibold text-xs inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Sign</button>` : ''}
                                ${r.user === data.loggedInUser && r.status === 'Signed' ? `<button class="px-3 py-1.5 rounded-md font-semibold text-xs inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400">Revoke</button>` : ''}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

const KpiTile = (title, value, isActive) => `
    <div data-action="set-auth-filter" data-filter="${title}" class="p-4 rounded-lg cursor-pointer ${isActive ? 'bg-primary-100 border-primary-500' : 'bg-gray-100'} border">
        <p class="text-sm text-gray-500">${title}</p>
        <p class="text-2xl font-bold">${value}</p>
    </div>
`;

const AttachmentsCell = (attachments, categoryId, isDocumentAccordionOpen) => {
    const documentCount = attachments.length;

    return `
    <div class="w-60">
        <div class="flex items-center justify-center gap-1 cursor-pointer text-gray-500 border-2 border-dashed border-gray-300 rounded-md p-2 text-center hover:border-primary-500 hover:text-primary-600 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2.4-2.4-4.2-4.8-4.8-.4-.1-.8-.2-1.2-.2s-.8.1-1.2.2c-2.4.6-4.2 2.4-4.8 4.8-.3 1.4 0 2.7.7 3.9l-1.9 1.9c-1.2 1.2-1.2 3.1 0 4.2.6.6 1.4.9 .1.9s1.5-.3 2.1-.9L12 19.5l1.9 1.9c.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9c1.2-1.2 1.2-3.1 0-4.2l-1.9-1.9z"></path><path d="M12 11v4"></path></svg>
            <span class="font-medium text-xs">${documentCount} document${documentCount !== 1 ? 's' : ''} uploaded</span>
        </div>
        ${documentCount > 0 ? `
            <div class="mt-2">
                <button data-action="toggle-document-accordion" class="w-full text-left text-xs font-medium text-gray-500 hover:text-primary-600">
                    ${isDocumentAccordionOpen ? 'Hide' : 'View'} Documents
                </button>
                ${isDocumentAccordionOpen ? `
                    <div class="mt-2 border-t border-gray-200 pt-2">
                        <table class="w-full text-sm">
                            <tbody>
                                ${attachments.map(att => `
                                    <tr class="border-b border-gray-100 last:border-b-0">
                                        <td class="p-1.5 truncate text-gray-700">${att.name}</td>
                                        <td class="p-1.5 text-right">
                                            <button class="text-primary-600 hover:underline text-xs">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                            </button>
                                            <button class="text-red-600 hover:underline text-xs ml-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                            </button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                ` : ''}
            </div>
        ` : ''}
    </div>
`;
};

const ActionItemsCell = (count) => `
    <a href="#" class="flex items-center justify-center gap-1 text-gray-500 hover:text-primary-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m10 11-2 2 2 2"></path><path d="m14 11 2 2-2 2"></path></svg>
        <span class="font-medium text-xs">${count}</span>
    </a>
`;

const HistoryCell = (history) => `
    <button class="text-gray-500 hover:text-primary-600" title="View History">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><path d="M12 7v5l4 2"></path></svg>
    </button>
`;

const StatusBadge = (status) => {
    const config = { "In Progress": "bg-blue-100 text-blue-800", "Completed": "bg-green-100 text-green-800", "Pending": "bg-yellow-100 text-yellow-800", "Not Started": "bg-gray-100 text-gray-800", "Signed": "bg-green-100 text-green-800" }[status] || "bg-gray-100 text-gray-800";
    return `<span class="px-2 py-0.5 rounded-full text-xs font-medium ${config}">${status}</span>`;
}

const RiskBadge = (risk) => {
    const config = {
        "Critical": "bg-red-100 text-red-800",
        "High": "bg-orange-100 text-orange-800",
        "Medium": "bg-yellow-100 text-yellow-800",
        "Low": "bg-green-100 text-green-800",
    }[risk] || "bg-gray-100 text-gray-800";
    return `<span class="inline-block px-2 py-0.5 rounded-full text-xs font-medium ${config}">${risk}</span>`;
};

const Avatar = (name) => {
    if (!name) return '<div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">?</div>';
    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    return `<div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600" title="${name}">${initials}</div>`;
};

const SlidingPanel = (panel, title, content, isOpen) => `
    <div data-panel="${panel}" class="fixed inset-0 z-40 ${isOpen ? '' : 'hidden'}">
        <div data-action="close-panel" class="absolute inset-0 bg-gray-900/30 panel-overlay"></div>
        <div class="panel absolute top-0 right-0 h-full bg-white w-full max-w-2xl shadow-xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}">
            <div class="flex flex-col h-full">
                <div class="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 class="text-lg font-semibold text-gray-800">${title}</h2>
                    <button data-action="close-panel" class="bg-transparent text-gray-500 hover:text-primary-600 hover:bg-primary-50 !p-1 px-3 py-1.5 rounded-md font-semibold text-xs inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                <div class="flex-grow overflow-y-auto">${content}</div>
            </div>
        </div>
    </div>
`;

const ConversationCard = (conversation) => `
    <div class="p-4 space-y-4">
        ${conversation.map(c => `
            <div class="flex items-start gap-3">
                <img src="${c.avatar}" alt="${c.user}" class="w-8 h-8 rounded-full" />
                <div>
                    <div class="flex items-baseline gap-2">
                        <p class="font-semibold text-gray-800">${c.user}</p>
                        <p class="text-xs text-gray-400">${c.time}</p>
                    </div>
                    <p class="text-sm text-gray-700">${c.text}</p>
                </div>
            </div>
        `).join('')}
        <div class="p-2 border-t border-gray-200">
            <div class="flex items-center gap-2">
                <input type="text" placeholder="Type a message..." class="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50" />
                <button class="px-3 py-1.5 rounded-md font-semibold text-xs inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>
        </div>
    </div>
`;

const StatusHistoryCard = (history) => `
    <div class="p-4">
        <ul class="space-y-3">
            ${history.map(h => `
                <li class="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <div>
                        <p class="font-medium text-gray-800">${h.status}</p>
                        <p class="text-sm text-gray-500">${h.user} on ${h.date}</p>
                    </div>
                </li>
            `).join('')}
        </ul>
    </div>
`;