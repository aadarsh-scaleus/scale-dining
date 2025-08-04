import { PricingTable } from "@/components/pricing-table";

const features = [
    { name: "Menu", included: "starter" , check : "all" },
    { name: "Menu Item", included: "starter" ,  check : "all" },
    { name: "Item Category", included: "starter" ,  check : "all" },
    { name: "Area", included: "starter",  check : "all" },
    { name: "Table", included: "starter",  check : "all" },
    { name: "Reservation", included: "pro",  check : "both" },
    { name: "KOT", included: "pro",  check : "both" },
    { name: "Order", included: "pro",  check : "both" },
    { name: "Customer", included: "pro",  check : "both" },
    { name: "Staff", included: "pro",  check : "both" },
    { name: "Payment", included: "pro",  check : "both" },
    { name: "Report", included: "pro",  check : "both" },
    { name: "Setting", included: "all",  check : "all" },
    { name: "Delivery Executive", included: "all",  check : "advance" },
    { name: "Waiter Request", included: "all" ,  check : "advance"},
    { name: "Expenses", included: "pro",  check : "both" },
    { name: "Inventory", included: "pro",  check : "both" },
    { name: "Change Branch", included: "pro",  check : "both" },
    { name: "Export Report", included: "pro",  check : "both" },
    { name: "Table Reservation", included: "pro",  check : "both" },
    { name: "Payment Gateway Integration", included: "pro",  check : "both" },
    { name: "Theme Setting", included: "all",  check : "advance" },
  
];

const plans = [
    {
        name: "Starter",
        price: { monthly: 1500, yearly: 15000 },
        level: "starter",
    },
    {
        name: "Standard",
        price: { monthly: 2000, yearly: 20000 },
        level: "pro",
        // popular: true,
    },
    {
        name: "Pro Package",
        price: { monthly: 2200, yearly: 24999 },
        level: "all",
    },
];

function PricingTableDemo() {
    return (
        <PricingTable
            features={features}
            plans={plans}
            defaultPlan="pro"
            defaultInterval="monthly"
            onPlanSelect={(plan) => console.log("Selected plan:", plan)}
            containerClassName="py-12"
            buttonClassName="bg-primary hover:bg-primary/90"
        />
    );
}

export { PricingTableDemo }