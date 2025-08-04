
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { Calculator, ClipboardPlus, HandCoins, HandPlatter, Layers2, Printer, QrCode, Users } from "lucide-react";


export function FeatureSection() {
  return (
    
   

   
      <div className="md:max-w-7xl w-full px-6 md:px-0 mx-auto mt-10" id="features">
        <p className="mb-4 font-heading font-semibold text-sm text-[var(--para)]  text-center uppercase tracking-px">
        Features
        </p>
        <h2 className=" mb-10 md:mb-16 font-heading font-semibold text-3xl text-[var(--heading)] sm:text-4xl text-center">
        Powerful Features Built to Elevate Your Restaurant Operations
        </h2>
        <ul className="grid grid-cols-2 md:gap-10 gap-4 md:grid-cols-8 xl:grid-cols-12 xl:grid-rows-2 mb-16">
          <GridItem
            area="md:col-span-2 xl:col-span-3 xl:row-span-1"
            icon={<QrCode  className="h-15 w-15"/>}
            title="QR Code Menu"
            description="Contactless Ordering Made Easy"
          />
          <GridItem
            area="md:col-span-2 xl:col-span-3 xl:row-span-1"
            icon={<HandCoins className="h-15 w-15" />}
            title="Payment Gateway Integration"
            description="Fast, Secure, and Flexible Payments using Stripe and Razorpay"
          />
          <GridItem
            area="md:col-span-2 xl:col-span-3 xl:row-span-1"
            icon={<Users className="h-15 w-15"/>}
            title="Staff Management"
            description="Separate login for every staff role with different permissions."
          />
          <GridItem
            area="md:col-span-2 xl:col-span-3 xl:row-span-1"
            icon={<Calculator className="h-15 w-15" />}
            title="POS (Point of Sale)"
            description="Complete POS Integration"
          />
          <GridItem
            area="md:col-span-2 xl:col-span-3 xl:row-span-1"
            icon={<Layers2 className="h-15 w-15"/>}
            title="Custom Floor Plans"
            description="Design Your Restaurant's Layout"
          />
          <GridItem
            area="md:col-span-2 xl:col-span-3 xl:row-span-1"
            icon={<HandPlatter className="h-15 w-15" />}
            title="Kitchen Order Tickets (KOT)"
            description="Efficient Kitchen Workflow"
          />
          <GridItem
            area="md:col-span-2 xl:col-span-3 xl:row-span-1"
            icon={<Printer className="h-15 w-15" />}
            title="Bill Printings"
            description="Quick and Accurate Billing"
          />

          <GridItem
            area="md:col-span-2 xl:col-span-3 xl:row-span-1"
            icon={<ClipboardPlus className="h-15 w-15" />}
            title="Reports"
            description="Data-Driven Decisions"
          />
       
        </ul>
      </div>
      
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (

    <li className={cn("min-h-[12rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
          
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-3">
          <div className="relative flex  flex-col justify-between gap-3">
            <div className="w-fit rounded-lg m-auto p-2">
              {icon}
            </div>
            <div className="space-y-3 flex flex-col items-center justify-center text-center">
              <h3 className="pt-0.5 text-lg leading-[1.375rem] m-auto font-semibold font-sans tracking-[-0.04em] md:text-xl md:leading-[1.875rem] text-balance text-foreground mb-2">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground m-auto">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  
  );
};
