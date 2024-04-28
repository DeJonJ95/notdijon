import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SOCIALS = [
  {
    href: 'https://github.com/',
    label: 'GitHub',
    Icon: FaGithub,
  },
  {
    href: 'https://linkedin.com/in/dejon-johnson',
    label: 'LinkedIn',
    Icon: FaLinkedin,
  },
  {
    href: 'mailto:dejonj95@gmail.com',
    label: 'Email',
    Icon: HiOutlineMail,
  },
];

export default function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {SOCIALS.map(({ href, label, Icon }) => (
        <li key={label} className="mr-5 text-xs shrink-0">
          <a
            href={href}
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            aria-label={label}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon className="h-6 w-6" />
          </a>
        </li>
      ))}
    </ul>
  );
}
