import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import NumberFlow from "@number-flow/react"

export function PricingTable({
  features,
  plans,
  onPlanSelect,
  defaultPlan = "pro",
  defaultInterval = "monthly",
  containerClassName,
  ...props
}) {
  const [isYearly, setIsYearly] = React.useState(defaultInterval === "yearly")
  const [selectedPlan, setSelectedPlan] = React.useState(defaultPlan)

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan)
    onPlanSelect?.(plan)
  }

  return (
  <>
   
        <h2 className="mb-5 md:mb-10 font-heading font-semibold text-3xl text-[var(--heading)] sm:text-4xl text-center" id="pricing">
          Simple, Transparent Pricing
        </h2>
           <h2 className=" md:mb-10  font-heading font-semibold text-xl text-[var(--heading)] sm:text-2xl text-center">
            Get everything you need to manage your restaurant with one affordable plan.
        </h2>
    <section
      className={cn(
        "bg-background text-foreground",
        "py-6 sm:py-16 md:py-20 px-4 md:pt-0",
        "fade-bottom overflow-hidden pb-0"
      )}>
      <div
        className={cn("w-full max-w-5xl mx-auto px-4", containerClassName)}
        {...props}>
        <div className="flex justify-end mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-3 py-1 rounded-md transition-colors",
                !isYearly ? "bg-zinc-100 dark:bg-zinc-800" : "text-zinc-500"
              )}>
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-3 py-1 rounded-md transition-colors",
                isYearly ? "bg-zinc-100 dark:bg-zinc-800" : "text-zinc-500"
              )}>
              Yearly
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {plans.map((plan) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => handlePlanSelect(plan.level)}
              className={cn(
                "flex-1 p-4 rounded-xl text-left transition-all",
                "border border-zinc-200 dark:border-zinc-800",
                selectedPlan === plan.level &&
                  "ring-2 ring-purple-500 dark:ring-purple-400"
              )}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{plan.name}</span>
                {plan.popular && (
                  <span
                    className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-1">
                <NumberFlow
                  format={{
                    style: "currency",
                    currency: "INR",
                    trailingZeroDisplay: "stripIfInteger",
                  }}
                  value={isYearly ? plan.price.yearly : plan.price.monthly}
                  className="text-2xl font-bold" />
                <span className="text-sm font-normal text-zinc-500">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div
          className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[640px] divide-y divide-zinc-200 dark:divide-zinc-800">
              <div className="flex items-center p-4 bg-zinc-50 dark:bg-zinc-900">
                <div className="flex-1 text-sm font-medium">Features</div>
                <div className="flex items-center gap-8 text-sm">
                  {plans.map((plan) => (
                    <div key={plan.level} className="w-16 text-center font-medium">
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>
            {features.map((feature) =>  (
  <div
    key={feature.name}
    className={cn(
      "flex items-center p-4 transition-colors",
      
      feature.included === selectedPlan &&
        "bg-purple-50/50 dark:bg-purple-900/20"
    )}>
    <div className="flex-1 text-sm">{feature.name}</div>
    <div className="flex items-center gap-8 text-sm">
      {plans.map((plan) => {
        const showCheck =
          feature.check === "all" ||
          (feature.check === "advance" && plan.level === "all") ||
          (feature.check === "both" && (plan.level === "pro" ||  plan.level === "all"));

        return (
          <div
            key={plan.level}
            className={cn(
              "w-16 flex justify-center",
              plan.level === selectedPlan && "font-medium"
            )}>
            {showCheck ? (
              <CheckIcon className="w-5 h-5 text-purple-500" />
            ) : (
              <span className="text-zinc-300 dark:text-zinc-700">-</span>
            )}
          </div>
        );
      })}
    </div>
  </div>
))}

            </div>
          </div>
        </div>

        
      </div>
    </section>
  </>
  );
}


