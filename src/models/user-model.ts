interface UserBase {
    id: number;
    name: string;
    email: string;
    department: string;
    role: string;
  }
  
  export interface RegularUser extends UserBase {
    assignedTasks: string[];
    workload: number;
    ranking: number;
    loggedHours: number;
    taskCompletionRate: number;
    notes?: string;
  }
  
  export interface AdminUser extends UserBase {
    accessibleDepartment: string;
    teamOverview: UserSummary[];
    taskDistributionStats: TaskDistribution[];
    alerts: string[];
    highWorkloadThreshold: number;
    performanceMetrics: PerformanceSummary;
    taskAssignmentHistory: TaskAssignment[];
    canReassignTasks: boolean;
    canViewReports: boolean;
    canModifyUsers: boolean;
  }
  
  interface UserSummary {
    userId: number;
    name: string;
    workload: number;
    taskCompletionRate: number;
  }
  
  interface TaskDistribution {
    userId: number;
    taskCount: number;
    averageRanking: number;
  }
  
  interface PerformanceSummary {
    averageCompletionTime: number;
    topPerformers: string[];
    bottlenecks: string[];
  }
  
  interface TaskAssignment {
    taskId: string;
    assignedTo: number;
    assignedBy: number;
    dateAssigned: string;
  }
  