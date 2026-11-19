import fs from 'node:fs/promises';
const filename=process.argv[2];
if(!filename){ console.error('Usage: node examples/review-evidence.mjs assessment.json'); process.exit(2); }
const report=JSON.parse(await fs.readFile(filename,'utf8'));
const required=['contract','registration','execution','authorization','confirmation','lifecycle','security'];
const blockers=[];
for(const name of required){
 const gate=report.gates?.[name];
 if(!gate) blockers.push(name+': missing gate');
 else if(gate.status==='not applicable' && !gate.reason?.trim()) blockers.push(name+': missing justification');
 else if(gate.status==='pass' && !gate.evidence?.trim()) blockers.push(name+': missing evidence reference');
 else if(!['pass','not applicable'].includes(gate.status)) blockers.push(name+': '+gate.status);
}
if(!report.environment?.browser || report.environment.browser==='not recorded') blockers.push('Environment: browser not recorded');
if(!['native','polyfill'].includes(report.environment?.mode)) blockers.push('Environment: execution mode not recorded');
console.log(JSON.stringify({action:report.action,decision:blockers.length?'blocked':'ready for human review',blockers,limitation:'Checks evidence completeness, not truth or browser support'},null,2));
process.exitCode=blockers.length?1:0;
