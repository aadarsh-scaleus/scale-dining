"use client"

import { HeroSection } from "@/components/hero-section"
import { Icons } from "@/components/ui/icons"

export function HeroSectionDemo() {
  return (
    <HeroSection
    
      title="Restaurant POS software made simple!"
      description="Easily manage orders, menus, and tables in one place with Scale Dining POS.
Save time, reduce errors, and grow your business faster"
      actions={[
        {
          text: "Start 30 Days Trail",
          href: "/",
          variant: "gradient",
        },
       
      ]}
     
    />
  )
}
