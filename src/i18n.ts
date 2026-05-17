import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      sidebar: {
        dashboard: "Dashboard",
        projects: "Projects",
        sites: "Construction Sites",
        tasks: "Tasks",
        materials: "Materials",
        procurement: "Procurement",
        finance: "Finance",
        documents: "Documents",
        contractors: "Contractors",
        employees: "Employees",
        reports: "Reports",
        settings: "Settings"
      },
      header: {
        searchPlaceholder: "Search projects, tasks, materials...",
      },
      dashboard: {
        title: "ERP Dashboard",
        subtitle: "Overview of all active construction operations",
        activeProjects: "Active Projects",
        activeSites: "Active Sites",
        pendingMaterials: "Pending Material Req",
        criticalTasks: "Critical Tasks / Risks",
        budgetTitle: "Budget: Planned vs Actual (Millions $)",
        plannedBudget: "Planned Budget",
        actualExpenses: "Actual Expenses",
        lowStock: "Low Stock Alerts",
        dailyReports: "Recent Construction Daily Reports",
        project: "Project",
        supervisor: "Supervisor",
        date: "Date",
        status: "Status",
        notes: "Notes",
        onTrack: "On Track",
        delayed: "Delayed"
      },
      projects: {
        title: "Projects",
        subtitle: "Manage all construction projects and their lifecycles",
        createBtn: "Create Project",
        search: "Search by project name or client...",
        filters: "Filters",
        projectId: "Project ID",
        details: "Project Details",
        budgetActual: "Budget / Actual",
        timeline: "Timeline",
        manager: "Manager",
        status: "Status",
        actions: "Actions",
        spent: "Spent",
        to: "to",
        noProjects: "No projects found matching your search.",
        createNew: "Create New Project",
        projectName: "Project Name *",
        clientName: "Client Name *",
        location: "Location *",
        startDate: "Start Date *",
        deadline: "Deadline *",
        budget: "Budget ($) *",
        projectManager: "Project Manager",
        cancel: "Cancel"
      },
      tasks: {
        title: "Task Board",
        subtitle: "Kanban board for construction task management",
        addTask: "Add Task"
      },
      materials: {
        title: "Materials & Inventory",
        subtitle: "Track construction materials across all sites and warehouses",
        matReq: "Material Request",
        addMat: "Add Material",
        total: "Total Items in Stock",
        lowStock: "Low Stock Alerts",
        pendingReq: "Pending Requests",
        delivToday: "Deliveries Today",
        search: "Search materials...",
        filter: "Filter by Category/Site",
        material: "Material",
        category: "Category",
        inStock: "In Stock",
        reserved: "Reserved",
        available: "Available",
        location: "Location / Supplier",
        status: "Status",
        unit: "Unit"
      },
      finance: {
        title: "Finance & Budget",
        subtitle: "Monitor expenses, contractor payments, and profitability",
        export: "Export Report",
        totalBudget: "Total Planned Budget",
        actualExp: "Actual Expenses YTD",
        remBudget: "Remaining Budget",
        estProfit: "Estimated Profit Margin",
        vsLastYear: "vs last year",
        onTrack: "On Track",
        expBreakdown: "Expenses Breakdown",
        recentPayments: "Recent Contractor Payments",
        viewAll: "View All",
        invoice: "Invoice ID",
        contractor: "Contractor",
        project: "Project",
        amount: "Amount",
        date: "Date",
        status: "Status"
      },
      common: {
        comingSoonTitle: "Module \"{{module}}\" is coming soon",
        comingSoonDesc: "This section is currently under development."
      }
    }
  },
  ru: {
    translation: {
      sidebar: {
        dashboard: "Дашборд",
        projects: "Проекты",
        sites: "Объекты",
        tasks: "Задачи",
        materials: "Материалы",
        procurement: "Снабжение",
        finance: "Финансы",
        documents: "Документы",
        contractors: "Подрядчики",
        employees: "Сотрудники",
        reports: "Отчеты",
        settings: "Настройки"
      },
      header: {
        searchPlaceholder: "Поиск проектов, задач...",
      },
      dashboard: {
        title: "ERP Дашборд",
        subtitle: "Обзор всех активных строительных работ",
        activeProjects: "Активные проекты",
        activeSites: "Активные объекты",
        pendingMaterials: "Заявки на материалы",
        criticalTasks: "Критичные задачи",
        budgetTitle: "Бюджет: План / Факт (Млн $)",
        plannedBudget: "Плановый бюджет",
        actualExpenses: "Фактические расходы",
        lowStock: "Уведомления об остатках",
        dailyReports: "Последние ежедневные отчеты",
        project: "Проект",
        supervisor: "Руководитель",
        date: "Дата",
        status: "Статус",
        notes: "Примечания",
        onTrack: "По графику",
        delayed: "Отстает"
      },
      projects: {
        title: "Проекты",
        subtitle: "Управление всеми строительными проектами",
        createBtn: "Создать проект",
        search: "Поиск по названию или клиенту...",
        filters: "Фильтры",
        projectId: "ID Проекта",
        details: "Детали проекта",
        budgetActual: "Бюджет / Факт",
        timeline: "Сроки",
        manager: "Менеджер",
        status: "Статус",
        actions: "Объекты",
        spent: "Потрачено",
        to: "до",
        noProjects: "Проекты не найдены.",
        createNew: "Создать новый проект",
        projectName: "Название проекта *",
        clientName: "Клиент *",
        location: "Локация *",
        startDate: "Дата начала *",
        deadline: "Дэдлайн *",
        budget: "Бюджет ($) *",
        projectManager: "Менеджер проекта",
        cancel: "Отмена"
      },
      tasks: {
        title: "Задачи",
        subtitle: "Kanban доска для управления задачами",
        addTask: "Добавить задачу"
      },
      materials: {
        title: "Материалы и Склад",
        subtitle: "Отслеживание строительных материалов по всем объектам",
        matReq: "Заявка на материал",
        addMat: "Добавить материал",
        total: "Всего товаров",
        lowStock: "Мало остатков",
        pendingReq: "В ожидании",
        delivToday: "Доставки сегодня",
        search: "Поиск материалов...",
        filter: "Фильтр по типу/месту",
        material: "Материал",
        category: "Категория",
        inStock: "В наличии",
        reserved: "В резерве",
        available: "Доступно",
        location: "Локация / Поставщик",
        status: "Статус",
        unit: "Ед"
      },
      finance: {
        title: "Финансы и Бюджет",
        subtitle: "Контроль расходов, платежей подрядчикам и прибыли",
        export: "Экспорт",
        totalBudget: "Общий план. бюджет",
        actualExp: "Фактические расходы",
        remBudget: "Остаток бюджета",
        estProfit: "Ожидаемая маржа",
        vsLastYear: "к прошлому году",
        onTrack: "По плану",
        expBreakdown: "Структура расходов",
        recentPayments: "Последние платежи подрядчикам",
        viewAll: "Смотреть все",
        invoice: "ID Счета",
        contractor: "Подрядчик",
        project: "Проект",
        amount: "Сумма",
        date: "Дата",
        status: "Статус"
      },
      common: {
        comingSoonTitle: "Модуль \"{{module}}\" в разработке",
        comingSoonDesc: "Данный раздел появится в ближайшее время."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
