import React, { useState } from 'react';
import {
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    CreditCard,
    DollarSign,
    Download,
    Users,
    MoreHorizontal,
} from 'lucide-react';

import AdminLayout from '@/Layouts/AdminLayout';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// --- Demo Data ---
const statsData = [
    {
        title: 'Total Revenue',
        value: '$45,231.89',
        change: '+20.1%',
        trend: 'up',
        description: 'from last month',
        icon: DollarSign,
    },
    {
        title: 'Active Users',
        value: '+2,350',
        change: '+18.2%',
        trend: 'up',
        description: 'from last month',
        icon: Users,
    },
    {
        title: 'Total Sales',
        value: '+12,234',
        change: '+4.5%',
        trend: 'up',
        description: 'from last month',
        icon: CreditCard,
    },
    {
        title: 'System Latency',
        value: '24ms',
        change: '-2.4%',
        trend: 'down',
        description: 'from last hour',
        icon: Activity,
    },
];

const monthlyOverview = [
    { month: 'Jan', revenue: 4200, height: 'h-24' },
    { month: 'Feb', revenue: 5800, height: 'h-32' },
    { month: 'Mar', revenue: 4900, height: 'h-28' },
    { month: 'Apr', revenue: 7400, height: 'h-40' },
    { month: 'May', revenue: 6800, height: 'h-36' },
    { month: 'Jun', revenue: 8900, height: 'h-48' },
    { month: 'Jul', revenue: 8100, height: 'h-44' },
    { month: 'Aug', revenue: 9500, height: 'h-52' },
    { month: 'Sep', revenue: 7900, height: 'h-40' },
    { month: 'Oct', revenue: 8800, height: 'h-48' },
    { month: 'Nov', revenue: 9800, height: 'h-56' },
    { month: 'Dec', revenue: 11200, height: 'h-60' },
];

const recentTransactions = [
    {
        id: 'INV-001',
        customer: 'Olivia Martin',
        email: 'olivia.martin@email.com',
        avatar: 'OM',
        status: 'Completed',
        date: 'Nov 24, 2026',
        amount: '$1,999.00',
    },
    {
        id: 'INV-002',
        customer: 'Jackson Lee',
        email: 'jackson.lee@email.com',
        avatar: 'JL',
        status: 'Processing',
        date: 'Nov 24, 2026',
        amount: '$39.00',
    },
    {
        id: 'INV-003',
        customer: 'Isabella Nguyen',
        email: 'isabella.nguyen@email.com',
        avatar: 'IN',
        status: 'Completed',
        date: 'Nov 23, 2026',
        amount: '$299.00',
    },
    {
        id: 'INV-004',
        customer: 'William Kim',
        email: 'will@email.com',
        avatar: 'WK',
        status: 'Failed',
        date: 'Nov 22, 2026',
        amount: '$99.00',
    },
    {
        id: 'INV-005',
        customer: 'Sofia Davis',
        email: 'sofia.davis@email.com',
        avatar: 'SD',
        status: 'Completed',
        date: 'Nov 21, 2026',
        amount: '$450.00',
    },
];

const recentActivity = [
    { name: 'Olivia Martin', action: 'upgraded to Pro Plan', time: '2m ago', amount: '+$1,999.00' },
    { name: 'Jackson Lee', action: 'purchased API Add-on', time: '15m ago', amount: '+$39.00' },
    { name: 'Isabella Nguyen', action: 'renewed annual license', time: '1h ago', amount: '+$299.00' },
    { name: 'William Kim', action: 'payment declined', time: '3h ago', amount: '$99.00' },
    { name: 'Sofia Davis', action: 'added 5 team seats', time: '5h ago', amount: '+$450.00' },
];

export default function Dashboard({ auth }) {
    const [searchQuery, setSearchQuery] = useState('');

    const user = auth?.user ?? {
        name: 'Admin User',
        email: 'admin@example.com',
    };

    const filteredTransactions = recentTransactions.filter(
        (item) =>
            item.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Completed':
                return (
                    <Badge className="bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/25 border-emerald-500/20">
                        Completed
                    </Badge>
                );
            case 'Processing':
                return (
                    <Badge
                        variant="secondary"
                        className="bg-amber-500/15 text-amber-600 hover:bg-amber-500/25 border-amber-500/20"
                    >
                        Processing
                    </Badge>
                );
            case 'Failed':
                return <Badge variant="destructive">Failed</Badge>;
            default:
                return <Badge variant="outline">{status}</Badge>;
        }
    };

    return (
        <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Welcome back, {user.name}. Here is what is happening today.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export Report
                    </Button>
                    <Button>Create New</Button>
                </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                    {/* KPI Stat Cards */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {statsData.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <Card key={idx}>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                                        <Icon className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{stat.value}</div>
                                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                                            {stat.trend === 'up' ? (
                                                <span className="text-emerald-600 flex items-center font-medium mr-1">
                                                    <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" />
                                                    {stat.change}
                                                </span>
                                            ) : (
                                                <span className="text-emerald-600 flex items-center font-medium mr-1">
                                                    <ArrowDownRight className="h-3.5 w-3.5 mr-0.5" />
                                                    {stat.change}
                                                </span>
                                            )}
                                            {stat.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Chart & Recent Activity Grid */}
                    <div className="grid gap-4 lg:grid-cols-7">
                        <Card className="lg:col-span-4">
                            <CardHeader>
                                <CardTitle>Revenue Overview</CardTitle>
                                <CardDescription>Monthly revenue performance for 2026</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="h-64 flex items-end justify-between gap-2 pt-6 px-2">
                                    {monthlyOverview.map((item) => (
                                        <div
                                            key={item.month}
                                            className="flex flex-col items-center flex-1 gap-2 group"
                                        >
                                            <div className="relative w-full flex justify-center">
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 text-xs font-medium bg-foreground text-background px-1.5 py-0.5 rounded">
                                                    ${item.revenue}
                                                </span>
                                                <div
                                                    className={`w-full max-w-[32px] bg-primary/85 group-hover:bg-primary rounded-t-md transition-all ${item.height}`}
                                                />
                                            </div>
                                            <span className="text-xs text-muted-foreground">{item.month}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="lg:col-span-3">
                            <CardHeader>
                                <CardTitle>Recent Activity</CardTitle>
                                <CardDescription>Latest customer actions across your workspace</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-5">
                                {recentActivity.map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-9 w-9">
                                                <AvatarFallback>
                                                    {item.name
                                                        .split(' ')
                                                        .map((n) => n[0])
                                                        .join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium leading-none">{item.name}</p>
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    {item.action} • {item.time}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-sm font-semibold">{item.amount}</div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Transactions Table */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Transactions</CardTitle>
                            <CardDescription>
                                A list of recent invoices and payment statuses.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Invoice</TableHead>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                        <TableHead className="w-[50px]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredTransactions.length > 0 ? (
                                        filteredTransactions.map((tx) => (
                                            <TableRow key={tx.id}>
                                                <TableCell className="font-medium">{tx.id}</TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-2.5">
                                                        <Avatar className="h-8 w-8">
                                                            <AvatarFallback>{tx.avatar}</AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <div className="font-medium text-sm">{tx.customer}</div>
                                                            <div className="text-xs text-muted-foreground">{tx.email}</div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{getStatusBadge(tx.status)}</TableCell>
                                                <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                                                <TableCell className="text-right font-medium">{tx.amount}</TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                <MoreHorizontal className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuItem>View Details</DropdownMenuItem>
                                                            <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                                                No matching transactions found.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </>
    );
}