
const state = {
    crNumber: "CR-2025-00123",
    crName: "Update Main Housing Assembly - V2",
    overallStatus: "In Progress",
    users: ["Alex Chen", "Sarah Lee", "John Smith", "Jane Doe", "Mike Brown", "Director Ops", "QA Lead"],
    riskLevels: [
        { name: "Low", value: 0 },
        { name: "Medium", value: 1 },
        { name: "High", value: 2 },
        { name: "Critical", value: 3 }
    ],
    statuses: ["In Progress", "Completed", "Pending", "Not Started"],
    unreadConversations: 2,
    statusHistory: [
        { status: "In Progress", date: "2025-10-22", user: "Jane Doe", history: [] },
        { status: "Initiated", date: "2025-10-20", user: "Alex Chen", history: [] }
    ],
    details: {
        isExpanded: false,
        isRelatedPartsExpanded: false,
        isAdditionalDetailsExpanded: false,
        collapsed: { supplierName: "ACME Corp Manufacturing", supplierCode: "ACM-001", partName: "Main Housing Assembly", partNumber: "PN-456-V1", coordinator: "Jane Doe", supplierCoordinator: "John Smith" },
        basicInfo: {
            left: {
                crNumber: "CR-2025-00123",
                crName: "Update Main Housing Assembly - V2",
                partName: "Main Housing Assembly",
                partNumber: "PN-456-V1",
                partRevision: "V1",
                customer: "Global Motors Inc.",
                coordinator: "Jane Doe",
                creationDate: "2025-10-20",
                changeReason: "Quality Improvement",
                proposedChange: "This change involves re-tooling the main injection mold to improve material flow and reduce defects."
            },
            right: {
                program: "Model G - Drivetrain",
                eNumber: "E-102938",
                supplierChangeNumber: "SCN-98765",
                partClassification: "Major Component",
                initiator: "Alex Chen",
                secondaryCoordinator: "Mike Brown",
                buyer: "Sarah Lee",
                changeCategory: "Tooling",
                targetImplementationDate: "2025-12-01",
                materialStatus: "Production",
                categoryType: "Product",
                links: [{ name: "Engineering Specs", url: "#" }, { name: "CAD Files", url: "#" }],
                comments: "Initial review complete. Awaiting risk assessment from engineering."
            }
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
            {
                name: "Design & Technical Risk", applicable: true, categories: [
                    { id: 1, category: "Feasibility", responsible: "Alex Chen", dueDate: "2025-11-15", risk: 1, status: "In Progress", rating: 4, weightage: 40, comments: "Tooling tests pending.", attachments: [{ id: 1, name: 'spec-v1.pdf', source: 'Update Risk', timestamp: '2025-10-24 10:30', user: 'Alex Chen' }, { id: 2, name: 'test-plan.docx', source: 'Action Item', timestamp: '2025-10-25 14:00', user: 'Jane Doe' }], history: [], actionItems: 2 },
                    { id: 2, category: "Material Spec", responsible: "Alex Chen", dueDate: "2025-11-18", risk: 0, status: "Pending", rating: 2, weightage: 20, comments: "Material spec needs to be confirmed with the supplier and updated in the system.", attachments: [], history: [], actionItems: 0 }
                ]
            },
            {
                name: "Financial & Commercial Risk", applicable: true, categories: [
                    { id: 3, category: "Cost Analysis", responsible: "Sarah Lee", dueDate: "2025-11-10", risk: 0, status: "Completed", rating: 2, weightage: 30, comments: "Cost increase within 5% tolerance.", attachments: [{ id: 3, name: 'cost-analysis.xlsx', source: 'Update Risk', timestamp: '2025-10-26 09:00', user: 'Sarah Lee' }], history: [], actionItems: 0 }
                ]
            },
            {
                name: "Logistics", applicable: false, categories: [
                    { id: 4, category: "Supply Chain", responsible: "John Smith", dueDate: "2025-11-20", risk: 2, status: "Pending", rating: 0, weightage: 10, comments: "", attachments: [], history: [], actionItems: 0 }
                ]
            }]
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
                { level: 1, role: "Initiator" }, { level: 2, role: "Coordinator" }, { level: 3, role: "Risk Analyst (Tech)" }, { level: 3, role: "Risk Analyst (Finance)" }, { level: 4, role: "QA Lead" }, { level: 5, role: "Director Ops" }, { level: 6, role: "Final Approver" }
            ],
            "Fast-Track Minor Change": [
                { level: 1, role: "Initiator" }, { level: 2, role: "Coordinator" }, { level: 3, role: "QA Lead" }, { level: 4, role: "Final Approver" }
            ],
        },
        roles: [
            { level: 1, role: "Initiator", user: "Alex Chen", status: "Signed", signature: "A.C.", date: "2025-10-20", method: "typed" },
            { level: 2, role: "Coordinator", user: "Jane Doe", status: "Signed", signature: "J.D.", date: "2025-10-21", method: "draw" },
            { level: 3, role: "Risk Analyst (Tech)", user: "Alex Chen", status: "Pending", signature: "", date: "", method: "" },
            { level: 3, role: "Risk Analyst (Finance)", user: "Sarah Lee", status: "Not Started", signature: "", date: "", method: "" },
            { level: 4, role: "QA Lead", user: "", status: "Not Started", signature: "", date: "", method: "" },
            { level: 5, role: "Director Ops", user: "Director Ops", status: "Rejected", signature: "D.O.", date: "2025-10-23", method: "typed" },
            { level: 6, role: "Final Approver", user: "", status: "Not Started", signature: "", date: "", method: "" },
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
        updateRisk: false,
        actionItem: false,
        attachments: false
    },
    modals: {
        signature: false,
        bulkActionsOpen: null
    },
    currentRiskItem: null,
    isDocumentAccordionOpen: false,
    loggedInUser: "Jane Doe",
    toast: {
        visible: false,
        message: '',
        type: 'success' // success, error, info
    },
    loading: false
};

const recordHistory = (categoryId, field, oldValue, newValue) => {
    const category = state.riskAssessment.groups.flatMap(g => g.categories).find(c => c.id === categoryId);
    if (category) {
        const user = state.loggedInUser;
        const timestamp = new Date().toISOString().slice(0, 16).replace('T', ' ');
        category.history.push({
            user,
            timestamp,
            field,
            oldValue,
            newValue
        });
    }
};

const showToast = (message, type = 'success') => {
    state.toast = { visible: true, message, type };
    render();
    setTimeout(() => {
        state.toast.visible = false;
        render();
    }, 3000);
};

const render = () => {
    const root = document.getElementById('root');
    const scrollY = window.scrollY;
    root.innerHTML = App(state);
    window.scrollTo(0, scrollY);
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
        if (e.target.closest('[data-action="toggle-related-parts"]')) {
            state.details.isRelatedPartsExpanded = !state.details.isRelatedPartsExpanded;
        }
        if (e.target.closest('[data-action="toggle-additional-details"]')) {
            state.details.isAdditionalDetailsExpanded = !state.details.isAdditionalDetailsExpanded;
        }
        if (e.target.closest('[data-action="toggle-conversation"]')) {
            state.panels.conversation = !state.panels.conversation;
        }
        if (e.target.closest('[data-action="toggle-history"]')) {
            state.panels.history = !state.panels.history;
        }
        if (e.target.closest('[data-action="close-panel"]')) {
            const panel = e.target.closest('[data-panel]').dataset.panel;
            if (panel) state.panels[panel] = false;
        }
        if (e.target.closest('[data-action="open-panel"]')) {
            const button = e.target.closest('[data-action="open-panel"]');
            const panel = button.dataset.panel;
            if (panel) {
                const id = parseInt(button.dataset.id || e.target.closest('tr')?.querySelector('[data-id]')?.dataset.id, 10);
                if (id) {
                    state.currentRiskItem = state.riskAssessment.groups.flatMap(g => g.categories).find(c => c.id === id);
                }
                state.panels[panel] = true;
            }
        }
        if (e.target.closest('[data-action="save-risk"]')) {
            const id = state.currentRiskItem.id;
            const riskLevel = parseInt(document.querySelector('input[name="risk-level"]:checked').value, 10);
            const description = document.getElementById('risk-description-textarea').value;

            const category = state.riskAssessment.groups.flatMap(g => g.categories).find(c => c.id === id);
            if (category) {
                if (category.risk !== riskLevel) {
                    recordHistory(id, 'risk', category.risk, riskLevel);
                    category.risk = riskLevel;
                }
                if (category.comments !== description) {
                    recordHistory(id, 'comments', category.comments, description);
                    category.comments = description;
                }
            }

            state.panels.updateRisk = false;
            showToast('Risk updated successfully!');
        }
        if (e.target.closest('[data-action="add-action-item"]')) {
            const name = document.getElementById('action-item-name').value;
            const description = document.getElementById('action-item-description').value;
            const responsible = document.getElementById('action-item-responsible').value;
            const dueDate = document.getElementById('action-item-due-date').value;

            const newActionItem = {
                id: state.actionItems.length + 1,
                assessmentCategory: state.currentRiskItem ? state.currentRiskItem.category : "General",
                name,
                responsible,
                dueDate,
                status: "Pending"
            };

            state.actionItems.push(newActionItem);
            state.panels.actionItem = false;
            showToast('Action item created successfully!');
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
                    const oldValue = category[field];
                    if (oldValue !== value) {
                        recordHistory(id, field, oldValue, value);
                        category[field] = value;
                    }
                }
            });
            state.modals.bulkActionsOpen = null;
            showToast(`${state.riskAssessment.selected.length} items updated successfully!`);
        }
        if (e.target.closest('[data-action="set-auth-filter"]')) {
            state.authorization.activeFilter = e.target.closest('[data-action="set-auth-filter"]').dataset.filter;
        }
        if (e.target.closest('[data-action="toggle-find-me"]')) {
            state.authorization.showFindMe = !state.authorization.showFindMe;
        }

        if (e.target.closest('[data-action="sign-auth"]')) {
            const roleName = e.target.closest('[data-action="sign-auth"]').dataset.role;
            const role = state.authorization.roles.find(r => r.role === roleName);
            if (role) {
                role.status = 'Signed';
                role.signature = state.loggedInUser.split(' ').map(n => n[0]).join('.').toUpperCase() + '.';
                role.date = new Date().toISOString().slice(0, 10);
            }
        }
        if (e.target.closest('[data-action="revoke-auth"]')) {
            const roleName = e.target.closest('[data-action="revoke-auth"]').dataset.role;
            const role = state.authorization.roles.find(r => r.role === roleName);
            if (role) {
                role.status = 'Not Started';
                role.signature = '';
                role.date = '';
            }
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

            if (e.target.type === 'number' || e.target.dataset.field === 'risk') {
                value = parseInt(value, 10);
            }

            const category = state.riskAssessment.groups
                .flatMap(g => g.categories)
                .find(c => c.id === id);

            if (category) {
                const oldValue = category[field];
                if (oldValue !== value) {
                    recordHistory(id, field, oldValue, value);
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

const calculateRiskScore = (riskAssessment) => {
    const applicableCategories = riskAssessment.groups
        .filter(g => g.applicable)
        .flatMap(g => g.categories);

    if (applicableCategories.length === 0) {
        return { score: 0 };
    }

    const totalWeight = applicableCategories.reduce((sum, cat) => sum + cat.weightage, 0);
    const weightedSum = applicableCategories.reduce((sum, cat) => sum + (cat.rating * cat.weightage), 0);

    if (totalWeight === 0) {
        return { score: 0 };
    }

    // Assuming max rating is 5 to normalize the score to 0-100
    const maxRating = 5;
    const score = (weightedSum / (totalWeight * maxRating)) * 100;

    return { score: Math.round(score) };
};

const App = (data) => `
    <div class="flex flex-col h-screen">
        ${Toast(data.toast)}
        ${data.loading ? LoadingSpinner() : ''}
        ${PageHeader(data)}
        <main class="flex-grow overflow-y-auto p-4">
            <div class="max-w-full mx-auto space-y-6">
                ${DetailsCard(data.details)}
                ${RiskAndActionsCard(data)}
            </div>
        </main>
        ${SlidingPanel('conversation', "Conversation", ConversationCard(data.conversation), data.panels.conversation)}
        ${SlidingPanel('history', "Status History", StatusHistoryCard(data), data.panels.history)}
        ${SlidingPanel('updateRisk', "Update Risk", UpdateRiskPanel(data), data.panels.updateRisk)}
        ${SlidingPanel('actionItem', "Add Action Item", ActionItemPanel(data), data.panels.actionItem)}
        ${SlidingPanel('attachments', "Manage Attachments", AttachmentsPanel(data), data.panels.attachments)}
    </div>
`;

const getNextRolesToSign = (roles) => {
    const minUnsignedLevel = Math.min(
        ...roles.filter(r => r.status !== 'Signed' && r.status !== 'Rejected').map(r => r.level)
    );
    if (minUnsignedLevel === Infinity) {
        return [];
    }
    return roles.filter(r => r.level === minUnsignedLevel && (r.status === 'Pending' || r.status === 'Not Started'));
};

const isUserAuthorizedToApprove = (data) => {
    const hasRejection = data.authorization.roles.some(r => r.status === 'Rejected');
    if (hasRejection) return false;

    const nextRoles = getNextRolesToSign(data.authorization.roles);
    return nextRoles.some(r => r.user === data.loggedInUser);
};

const PageHeader = (data) => {
    const canApprove = isUserAuthorizedToApprove(data);
    return `
    <div class="p-4 bg-gray-50/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-30">
        <div class="max-w-full mx-auto flex justify-between items-center">
            <div>
                <p class="text-sm text-gray-500">${data.crNumber}</p>
                <h1 class="text-2xl font-bold text-gray-900">${data.crName}</h1>
            </div>
            <div class="flex items-center gap-2">
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
    <div class="fade-in border-t border-gray-200 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            ${renderTwoColumnDetailSection('Basic Information', data.basicInfo)}
        </div>
        <div>
            ${renderDetailSection('Supplier Details', data.supplierDetails)}
            <div class="mt-4">
                ${renderCollapsibleDetailSection('Related Part Number', data.relatedParts, 'related-parts', data.isRelatedPartsExpanded)}
            </div>
        </div>
        <div class="md:col-span-2">
            ${renderCollapsibleDetailSection('Additional Details', data.additionalDetails, 'additional-details', data.isAdditionalDetailsExpanded, true)}
        </div>
    </div>
`;

const renderTwoColumnDetailSection = (title, dataObject) => `
    <div class="bg-gray-50 p-3 rounded-lg border border-gray-200">
        ${title ? `<h3 class="text-sm font-bold text-gray-700 mb-2">${title}</h3>` : ''}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <dl>
                ${Object.entries(dataObject.left).map(([key, value]) => InfoItem(key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()), value)).join('')}
            </dl>
            <dl>
                ${Object.entries(dataObject.right).map(([key, value]) => InfoItem(key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()), value)).join('')}
            </dl>
        </div>
    </div>
`;

const renderDetailSection = (title, dataObject) => `
    <div class="bg-gray-50 p-3 rounded-lg border border-gray-200">
        ${title ? `<h3 class="text-sm font-bold text-gray-700 mb-2">${title}</h3>` : ''}
        <dl>
            ${Object.entries(dataObject).map(([key, value]) => InfoItem(key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()), value)).join('')}
        </dl>
    </div>
`;

const renderCollapsibleDetailSection = (title, data, action, isExpanded, isBooleanInfo = false) => `
    <div>
        <button data-action="toggle-${action}" class="w-full text-left font-semibold text-gray-800 flex justify-between items-center mb-1">
            ${title}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        ${isExpanded ? `
            <div class="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-2">
                ${isBooleanInfo
                    ? `<div class="grid grid-cols-2 gap-2">${data.map(item => BoolInfoItem(item.label, item.value, item.description)).join('')}</div>`
                    : `<div class="max-h-48 overflow-y-auto"><table class="w-full text-sm"><tbody>
                        ${data.map(p => `
                            <tr class="border-b border-gray-100 last:border-b-0">
                                <td class="p-1.5 font-mono text-primary-600">${p.number}</td>
                                <td class="p-1.5">${p.name}</td>
                                <td class="p-1.5 text-gray-500">Rev ${p.revision}</td>
                            </tr>`).join('')}
                        </tbody></table></div>`
                }
            </div>`
        : ''}
    </div>
`;

const InfoItem = (label, value) => {
    // Check if value is an array of links
    if (Array.isArray(value)) {
        return `
            <div class="grid grid-cols-3 py-1">
                <dt class="text-xs text-gray-500 font-medium col-span-1">${label}</dt>
                <dd class="text-sm text-gray-800 col-span-2">
                    ${value.map(link => `<a href="${link.url}" class="text-primary-600 hover:underline" target="_blank">${link.name}</a>`).join(', ')}
                </dd>
            </div>
        `;
    }
    // Handle special long-text fields
    if (['Proposed Change', 'Comments'].includes(label)) {
         return `
            <div class="grid grid-cols-3 py-1">
                <dt class="text-xs text-gray-500 font-medium col-span-1">${label}</dt>
                <dd class="text-sm text-gray-800 col-span-2 whitespace-pre-wrap">${value || '-'}</dd>
            </div>
        `;
    }
    return `
        <div class="grid grid-cols-3 py-1">
            <dt class="text-xs text-gray-500 font-medium col-span-1">${label}</dt>
            <dd class="text-sm text-gray-800 col-span-2">${value || '-'}</dd>
        </div>
    `;
};

const BoolInfoItem = (label, value, description) => `
    <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full ${value ? 'bg-green-500' : 'bg-red-500'} "></span>
        <p class="text-sm font-medium text-gray-800">${label}</p>
        ${description ? `
            <div class="tooltip">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 cursor-pointer"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <span class="tooltip-text">${description}</span>
            </div>
        ` : ''}
    </div>
`;
}

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
                <div class="h-6 border-l border-gray-300 mx-1"></div>
            </div>
        </div>
    `;

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

    const riskLevelConfig = {
        "Low": "bg-green-50",
        "Medium": "bg-yellow-50",
        "High": "bg-red-50",
        "Critical": "bg-red-100",
    };

    return `
    <div class="overflow-x-auto ${riskAssessment.selected.length > 0 ? 'pt-12' : ''}">
        <table class="w-full text-sm">
            <thead class="bg-gray-50">
                <tr class="text-left text-gray-600">
                    <th class="p-3 w-4"><input type="checkbox" data-action="toggle-all-assessments" class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:ring-primary-500" ${allSelected ? 'checked' : ''}></th>
                    <th class="p-3 font-semibold">Assessment Category</th>
                    <th class="p-3 font-semibold">Resp. User</th>
                    <th class="p-3 font-semibold">Due Date</th>
                    <th class="p-3 font-semibold">Available Risks</th>
                    <th class="p-3 font-semibold">Actual Risk</th>
                    <th class="p-3 font-semibold">Weightage</th>
                    <th class="p-3 font-semibold">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                ${riskAssessment.groups.map((group) => {
                    const groupCategoryIds = group.categories.map(c => c.id);
                    const allSelectedInGroup = groupCategoryIds.length > 0 && groupCategoryIds.every(id => riskAssessment.selected.includes(id));

                    const groupRow = `
                    <tr class="bg-gray-100 hover:bg-gray-200 transition-colors">
                        <td class="p-2 w-4"><input type="checkbox" data-action="toggle-assessment-group" data-group="${group.name}" class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:ring-primary-500" ${allSelectedInGroup ? 'checked' : ''}></td>
                        <td colSpan="7" class="p-2 text-gray-800 font-bold flex justify-between items-center">
                            <span>${group.name}</span>
                            <button data-action="toggle-group-applicability" data-group="${group.name}" class="text-xs font-semibold px-2 py-1 rounded-md ${group.applicable ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-green-100 text-green-800 hover:bg-green-200'}">
                                ${group.applicable ? "Mark as N/A" : "Mark as Applicable"}
                            </button>
                        </td>
                    </tr>`;

                    const categoryRows = group.categories.map((cat) => {
                        const isSelected = riskAssessment.selected.includes(cat.id);
                        const isEditing = riskAssessment.editing && riskAssessment.editing.categoryId === cat.id;
                        const riskLevel = riskLevels.find(r => r.value == cat.risk);
                        const rowClass = isSelected ? 'bg-primary-50' : (riskLevel ? riskLevelConfig[riskLevel.name] : '');
                        const disabledClass = !group.applicable ? 'opacity-50 pointer-events-none' : '';

                        return `
                        <tr class="hover:bg-gray-50 transition-colors ${rowClass} ${disabledClass}">
                            <td class="p-3 w-4"><input type="checkbox" data-action="toggle-assessment-item" data-id="${cat.id}" class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:ring-primary-500" ${isSelected ? 'checked' : ''}></td>
                            <td class="p-3 font-medium text-gray-900">${cat.category}</td>
                            <td class="p-3" data-field="responsible" data-id="${cat.id}">
                                ${isEditing && riskAssessment.editing.field === 'responsible' ?
                                    `<select data-action="update-field" data-id="${cat.id}" data-field="responsible" class="w-full border-gray-300 rounded-md shadow-sm text-sm p-1">
                                        <option value="">Unassigned</option>
                                        ${users.map(u => `<option value="${u}" ${u === cat.responsible ? 'selected' : ''}>${u}</option>`).join('')}
                                    </select>` :
                                    Avatar(cat.responsible)
                                }
                            </td>
                            <td class="p-3" data-field="dueDate" data-id="${cat.id}">
                                ${isEditing && riskAssessment.editing.field === 'dueDate' ?
                                    `<input type="date" value="${cat.dueDate}" data-action="update-field" data-id="${cat.id}" data-field="dueDate" class="w-full border-gray-300 rounded-md shadow-sm text-sm p-1">` :
                                    `<span class="text-sm">${cat.dueDate}</span>`
                                }
                            </td>
                            <td class="p-3 text-xs">
                                <div class="flex flex-col space-y-1">
                                    ${riskLevels.map(r => `<div class="flex items-center"><div class="w-3 h-3 rounded-full mr-2 ${riskLevelConfig[r.name]}"></div> ${r.value} - ${r.name}</div>`).join('')}
                                </div>
                            </td>
                            <td class="p-3" data-field="risk" data-id="${cat.id}">
                                ${isEditing && riskAssessment.editing.field === 'risk' ?
                                    `<select data-action="update-field" data-id="${cat.id}" data-field="risk" class="w-full border-gray-300 rounded-md shadow-sm text-sm p-1">
                                        ${riskLevels.map(r => `<option value="${r.value}" ${r.value === cat.risk ? 'selected' : ''}>${r.name}</option>`).join('')}
                                    </select>` :
                                    RiskBadge(riskLevel)
                                }
                            </td>
                            <td class="p-3 text-sm" data-field="weightage" data-id="${cat.id}">
                                ${isEditing && riskAssessment.editing.field === 'weightage' ?
                                    `<input type="number" value="${cat.weightage}" data-action="update-field" data-id="${cat.id}" data-field="weightage" class="w-20 border-gray-300 rounded-md shadow-sm text-sm p-1">` :
                                    `${cat.weightage}`
                                }
                            </td>
                            <td class="p-3">
                                <div class="flex items-center justify-center space-x-1">
                                    <button data-action="open-panel" data-panel="updateRisk" class="p-1 rounded-md hover:bg-gray-200 text-gray-500 hover:text-gray-800" title="Update Risk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></button>
                                    <button data-action="open-panel" data-panel="actionItem" class="p-1 rounded-md hover:bg-gray-200 text-gray-500 hover:text-gray-800" title="Add Action Item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></button>
                                    <button data-action="open-panel" data-panel="attachments" class="p-1 rounded-md hover:bg-gray-200 text-gray-500 hover:text-gray-800 relative" title="Attachments">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                                        ${cat.attachments.length > 0 ? `<span class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-primary-500 ring-2 ring-white"></span>` : ''}
                                    </button>
                                    <button data-action="open-panel" data-panel="history" data-id="${cat.id}" class="p-1 rounded-md hover:bg-gray-200 text-gray-500 hover:text-gray-800" title="History"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><path d="M12 7v5l4 2"></path></svg></button>
                                </div>
                            </td>
                        </tr>
                    `;
                    }).join('');

                    return groupRow + categoryRows;
                }).join('')}
            </tbody>
        </table>
    </div>
`;
};

const ActionItemsTab = (data) => `
    <div class="p-4">
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">Action Items</h3>
            <button data-action="open-panel" data-panel="actionItem" class="px-3 py-1.5 rounded-md font-semibold text-xs inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add Action Item
            </button>
        </div>
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
                            <button class="bg-transparent text-gray-500 hover:text-primary-600 hover:bg-primary-50 p-1 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><path d="M12 7v5l4 2"></path></svg>
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    </div>
`;

const UpdateRiskPanel = (data) => {
    const item = data.currentRiskItem;
    if (!item) return '<div class="p-4">No risk item selected.</div>';

    const riskLevelColors = {
        0: 'green',
        1: 'yellow',
        2: 'orange',
        3: 'red',
    };

    return `
    <div class="p-4 space-y-4">
        <h3 class="text-lg font-semibold">${item.category}</h3>
        <div>
            <label class="text-sm font-medium text-gray-700">Risk Level</label>
            <div class="grid grid-cols-2 gap-4 mt-2">
                ${data.riskLevels.map(r => `
                    <label for="risk-level-${r.value}" class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input type="radio" id="risk-level-${r.value}" name="risk-level" value="${r.value}" class="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500" ${r.value === item.risk ? 'checked' : ''}>
                        <div class="ml-3 text-sm">
                            <p class="font-bold text-gray-900">${r.name}</p>
                            <p class="text-gray-500">Score: ${r.value}</p>
                        </div>
                        <div class="w-4 h-4 rounded-full ml-auto" style="background-color: ${riskLevelColors[r.value] || 'gray'}"></div>
                    </label>
                `).join('')}
            </div>
        </div>
        <div>
            <label class="text-sm font-medium text-gray-700">Description</label>
            <textarea id="risk-description-textarea" class="w-full border-gray-300 rounded-md shadow-sm text-sm mt-1" rows="4">${item.comments}</textarea>
        </div>
        <div>
            <label class="text-sm font-medium text-gray-700">Attach Files</label>
            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <div class="flex text-sm text-gray-600"><p class="pl-1">or drag and drop</p></div>
                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
            </div>
        </div>
        <div class="text-right">
            <button data-action="save-risk" class="px-4 py-2 rounded-md font-semibold text-sm inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Save Changes</button>
        </div>
        <div class="border-t pt-4">
            <h4 class="text-sm font-semibold text-gray-800 mb-2">History</h4>
            ${HistoryTimeline(item.history)}
        </div>
    </div>
`;
};

const HistoryTimeline = (history) => {
    if (!history || history.length === 0) {
        return '<p class="text-sm text-gray-500">No history available.</p>';

    return `
        <ul class="space-y-4">
            ${history.map(h => `
                <li class="border-l-2 pl-4">
                    <div>
                        <p class="font-medium text-gray-800">Field <span class="font-bold">${h.field}</span> changed</p>
                        <p class="text-sm text-gray-600">From <span class="font-semibold">${h.oldValue}</span> to <span class="font-semibold">${h.newValue}</span></p>
                        <p class="text-xs text-gray-400 mt-1">${h.user} at ${h.timestamp}</p>
                    </div>
                </li>
            `).join('')}
        </ul>
    `;
};

const ActionItemPanel = (data) => `
    <div class="p-4 space-y-4">
        <div>
            <label class="text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="action-item-name" class="w-full border-gray-300 rounded-md shadow-sm text-sm mt-1">
        </div>
        <div>
            <label class="text-sm font-medium text-gray-700">Description</label>
            <textarea id="action-item-description" class="w-full border-gray-300 rounded-md shadow-sm text-sm mt-1" rows="4"></textarea>
        </div>
        <div>
             <label class="text-sm font-medium text-gray-700">Internal Coordinator</label>
             <select id="action-item-responsible" class="w-full border-gray-300 rounded-md shadow-sm text-sm mt-1">
                ${data.users.map(u => `<option value="${u}" ${u === data.loggedInUser ? 'selected' : ''}>${u}</option>`).join('')}
            </select>
        </div>
        <div>
             <label class="text-sm font-medium text-gray-700">Supplier Coordinator</label>
             <select class="w-full border-gray-300 rounded-md shadow-sm text-sm mt-1">
                ${data.users.map(u => `<option value="${u}">${u}</option>`).join('')}
            </select>
        </div>
        <div>
            <label class="text-sm font-medium text-gray-700">Due Date</label>
            <input type="date" id="action-item-due-date" class="w-full border-gray-300 rounded-md shadow-sm text-sm mt-1">
        </div>
         <div class="text-right">
            <button data-action="add-action-item" class="px-4 py-2 rounded-md font-semibold text-sm inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Create Action Item</button>
        </div>
    </div>
`;

const AttachmentsPanel = (data) => {
    const attachments = data.currentRiskItem ? data.currentRiskItem.attachments : [];

    return `
    <div class="p-4 space-y-4">
        <h3 class="text-lg font-semibold">Manage Attachments for ${data.currentRiskItem ? data.currentRiskItem.category : ''}</h3>
        <div class="space-y-4">
            ${attachments.length > 0 ? attachments.map(att => `
                <div class="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg border">
                    <div class="flex-shrink-0">
                        <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div class="flex-grow">
                        <p class="text-sm font-semibold text-gray-800">${att.name}</p>
                        <p class="text-xs text-gray-500">
                            Uploaded by ${att.user} on ${att.timestamp} from "${att.source}"
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button class="p-1.5 rounded-md hover:bg-gray-200 text-gray-500 hover:text-gray-800" title="View">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </button>
                        <button class="p-1.5 rounded-md hover:bg-gray-200 text-gray-500 hover:text-gray-800" title="Download">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        </button>
                    </div>
                </div>
            `).join('') : '<p class="text-sm text-gray-500">No attachments found for this item.</p>'}
        </div>
        <div class="pt-4 border-t">
            <label class="block text-sm font-medium text-gray-700">Upload New File</label>
            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <div class="flex text-sm text-gray-600"><p class="pl-1">or drag and drop</p></div>
                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
            </div>
        </div>
    </div>
`;
};

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
            (role.user && role.user.toLowerCase().includes(searchLower));

        const matchesFindMe = !showFindMe || role.user === loggedInUser;

        const matchesFilter = activeFilter === 'Total Count' ||
            (activeFilter === 'Requested' && role.status === 'Not Started') ||
            (activeFilter === 'Approved' && role.status === 'Signed') ||
            (activeFilter === 'Rejected' && role.status === 'Rejected');

        return matchesSearch && matchesFindMe && matchesFilter;
    });

    return `
        <div class="p-4">
            <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    ${Object.entries(kpis).map(([key, value]) => KpiTile(key, value, activeFilter === key)).join('')}
                </div>
                <div class="flex justify-between items-center mb-4">
                    <div class="relative w-1/2">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input type="text" data-action="search-auth" value="${searchQuery}" placeholder="Search by role or user..." class="w-full border-gray-300 rounded-md shadow-sm text-sm pl-10">
                    </div>
                    <div class="flex items-center">
                        <input type="checkbox" id="findMeToggle" data-action="toggle-find-me" class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:ring-primary-500" ${showFindMe ? 'checked' : ''}>
                        <label for="findMeToggle" class="ml-2 text-sm font-medium text-gray-700">Find Me</label>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${filteredRoles.map(r => `
                        <div class="border rounded-lg p-3 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div class="flex justify-between items-start">
                                <div>
                                    <p class="font-bold text-gray-800">${r.role}</p>
                                    <p class="text-xs text-gray-500">Level ${r.level}</p>
                                </div>
                                ${StatusBadge(r.status)}
                            </div>
                            <div class="mt-3">
                                <label for="user-select-${r.role.replace(/\s/g, '-')}" class="text-xs font-medium text-gray-600">Assigned User</label>
                                <select id="user-select-${r.role.replace(/\s/g, '-')}" data-action="assign-user" data-role="${r.role}" class="w-full border-gray-300 rounded-md shadow-sm text-sm mt-1 focus:ring-primary-500 focus:border-primary-500">
                                    <option value="">Select User</option>
                                    ${data.users.map(u => `<option value="${u}" ${u === r.user ? 'selected' : ''}>${u}</option>`).join('')}
                                </select>
                            </div>
                            <div class="mt-3 flex justify-between items-center text-xs text-gray-500">
                                <div>
                                    <p>Signed: <span class="font-mono font-semibold text-gray-700">${r.signature || 'N/A'}</span></p>
                                    <p>Date: <span class="font-semibold text-gray-700">${r.date || 'N/A'}</span></p>
                                </div>
                                <div class="text-right">
                                    ${r.user === data.loggedInUser && (r.status === 'Not Started' || r.status === 'Pending') ? `<button data-action="sign-auth" data-role="${r.role}" class="px-3 py-1.5 rounded-md font-semibold text-xs inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Sign</button>` : ''}
                                    ${r.user === data.loggedInUser && r.status === 'Signed' ? `<button data-action="revoke-auth" data-role="${r.role}" class="px-3 py-1.5 rounded-md font-semibold text-xs inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400">Revoke</button>` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

const KpiTile = (title, value, isActive) => {
    const kpiConfig = {
        "Total Count": {
            bg: 'bg-gray-100',
            text: 'text-gray-800',
            activeBg: 'bg-blue-100',
            activeBorder: 'border-blue-500',
            hoverBg: 'hover:bg-gray-200',
        },
        "Requested": {
            bg: 'bg-yellow-100',
            text: 'text-yellow-800',
            activeBg: 'bg-yellow-200',
            activeBorder: 'border-yellow-500',
            hoverBg: 'hover:bg-yellow-200',
        },
        "Approved": {
            bg: 'bg-green-100',
            text: 'text-green-800',
            activeBg: 'bg-green-200',
            activeBorder: 'border-green-500',
            hoverBg: 'hover:bg-green-200',
        },
        "Rejected": {
            bg: 'bg-red-100',
            text: 'text-red-800',
            activeBg: 'bg-red-200',
            activeBorder: 'border-red-500',
            hoverBg: 'hover:bg-red-200',
        },
    };

    const config = kpiConfig[title] || kpiConfig["Total Count"];

    const classes = `
        p-3 rounded-lg cursor-pointer border-2 transition-all duration-200
        ${isActive
            ? `${config.activeBg} ${config.activeBorder}`
            : `${config.bg} border-transparent ${config.hoverBg}`
        }
    `;

    return `
    <div data-action="set-auth-filter" data-filter="${title}" class="${classes.trim()}">
        <p class="text-sm font-medium ${config.text}">${title}</p>
        <p class="text-2xl font-bold ${config.text}">${value}</p>
    </div>
    `;
};

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
    const config = {
        "In Progress": "bg-blue-100 text-blue-800 border border-blue-200",
        "Completed": "bg-green-100 text-green-800 border border-green-200",
        "Pending": "bg-yellow-100 text-yellow-800 border border-yellow-200",
        "Not Started": "bg-gray-100 text-gray-800 border border-gray-200",
        "Signed": "bg-green-100 text-green-800 border border-green-200",
        "Rejected": "bg-red-100 text-red-800 border border-red-200",
    }[status] || "bg-gray-100 text-gray-800 border border-gray-200";
    return `<span class="px-2 py-1 rounded-md text-xs font-bold ${config}">${status}</span>`;
};

const Toast = (toast) => {
    if (!toast.visible) return '';

    const config = {
        success: { bg: 'bg-green-500', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>' },
        error: { bg: 'bg-red-500', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>' },
        info: { bg: 'bg-blue-500', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>' },
    };

    const current = config[toast.type] || config.info;

    return `
        <div class="fixed top-5 right-5 z-[100] ${current.bg} text-white py-2 px-4 rounded-lg shadow-lg flex items-center animate-fade-in-down">
            <div class="w-6 h-6 mr-2">${current.icon}</div>
            <span>${toast.message}</span>
        </div>
    `;
};

const LoadingSpinner = () => `
    <div class="fixed inset-0 bg-gray-900/20 z-[101] flex items-center justify-center">
        <svg class="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    </div>
`;

const RiskBadge = (risk) => {
    if (!risk) return '';
    const config = {
        "Critical": "bg-red-100 text-red-800",
        "High": "bg-orange-100 text-orange-800",
        "Medium": "bg-yellow-100 text-yellow-800",
        "Low": "bg-green-100 text-green-800",
    }[risk.name] || "bg-gray-100 text-gray-800";
    return `<span class="inline-block px-2 py-0.5 rounded-full text-xs font-medium ${config}">${risk.value} - ${risk.name}</span>`;
};

const Avatar = (name) => {
    if (!name) return `<div class="text-sm text-gray-500 italic">Unassigned</div>`;
    return `<div class="text-sm font-medium text-gray-800" title="${name}">${name}</div>`;
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

const StatusHistoryCard = (data) => {
    const history = data.currentRiskItem ? data.currentRiskItem.history : data.statusHistory;
    const title = data.currentRiskItem ? `History for ${data.currentRiskItem.category}` : "Overall Status History";

    return `
    <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">${title}</h3>
        <ul class="space-y-4">
            ${history.map(h => `
                <li class="border-l-2 pl-4">
                    ${h.field ?
                        `<div>
                            <p class="font-medium text-gray-800">Field <span class="font-bold">${h.field}</span> changed</p>
                            <p class="text-sm text-gray-600">From <span class="font-semibold">${h.oldValue}</span> to <span class="font-semibold">${h.newValue}</span></p>
                            <p class="text-xs text-gray-400 mt-1">${h.user} at ${h.timestamp}</p>
                        </div>` :
                        `<div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            <div>
                                <p class="font-medium text-gray-800">${h.status}</p>
                                <p class="text-sm text-gray-500">${h.user} on ${h.date}</p>
                            </div>
                        </div>`
                    }
                </li>
            `).join('')}
             ${history.length === 0 ? '<p class="text-sm text-gray-500">No history found.</p>' : ''}
        </ul>
    </div>
    `;
};
