import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, Zap } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Product',
		links: [
			{ title: 'Features', href: '#features' },
			{ title: 'Pricing', href: '#pricing' },
			{ title: 'Testimonials', href: '#testimonials' },
			{ title: 'Integration', href: '/' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'FAQs', href: '/faqs' },
			{ title: 'About Us', href: '/about' },
			{ title: 'Privacy Policy', href: '/privacy' },
			{ title: 'Terms of Services', href: '/terms' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Changelog', href: '/changelog' },
			{ title: 'Brand', href: '/brand' },
			{ title: 'Help', href: '/help' },
		],
	},
	{
		label: 'Social Links',
		links: [
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Youtube', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
  return (
    <footer className="relative w-full border-t border-border/50 bg-background/40 backdrop-blur-xl px-4 py-12 md:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Info: Centered on mobile, Left-aligned on desktop */}
          <div className="flex flex-col items-center md:items-start space-y-4 xl:col-span-2">
            <div className="flex items-center gap-2">
              <Zap className="size-8 text-yellow-500" />
              <span className="text-2xl font-bold tracking-tight">FlowOps</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs text-center md:text-left">
              The ultimate automation engine for modern startups. Build, deploy, and scale with ease.
            </p>
            <div className="flex gap-4 pt-2">
               {[FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon].map((Icon, i) => (
                 <a key={i} href="#" className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors">
                   <Icon className="size-5" />
                 </a>
               ))}
            </div>
          </div>

          {/* Links Sections: 2 columns on mobile for better space usage */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:col-span-3 gap-8 w-full">
            {footerLinks.slice(0, 3).map((section) => (
              <div key={section.label} className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">{section.label}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Stacked on mobile */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground order-2 md:order-1">
            © {new Date().getFullYear()} FlowOps Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground order-1 md:order-2">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}