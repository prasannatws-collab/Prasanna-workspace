"use client";

import { ExternalLink, ShieldCheck, Server, Zap } from "lucide-react";

const PROJECTS_DATA = {
  "ltm_premera_bluecross.cs": {
    title: "LTM Premera BlueCross",
    category: "Financials / Healthcare",
    icon: <ShieldCheck className="text-emerald-400" size={20} />,
    description: "Developing account management and financial transaction workflows for a major US healthcare platform. Focusing on secure payment validation, invoices, receipts, and subsidy processing using Azure services and microservices.",
    tech: ["C#", "Azure Functions", "APIM", "Cosmos DB", "xUnit", "YAML Pipelines"],
    github: "#",
    demo: "#",
    code: `using System;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace Prasanna.LTM.PaymentService
{
    public class SubsidyTransactionValidator
    {
        [Function("ValidateSubsidyTransaction")]
        public async Task<ValidationResult> Run(
            [QueueTrigger("subsidy-items")] Transaction transaction,
            FunctionContext executionContext)
        {
            var logger = executionContext.GetLogger("Validator");
            logger.LogInformation($"Validating transaction ID: {transaction.Id}");
            
            // Check structural fields
            if (transaction.Amount <= 0 || string.IsNullOrEmpty(transaction.SubsidyId)) {
                return new ValidationResult { Success = false, Error = "Invalid subsidy structure" };
            }

            // Secure payment validation logic
            bool isValid = await _complianceClient.VerifyAsync(transaction);
            return new ValidationResult { Success = isValid };
        }
    }
}`
  },
  "accenture_conedison.cs": {
    title: "Accenture - ConEdison",
    category: "Utilities / Enterprise Scale",
    icon: <Server className="text-sky-400" size={20} />,
    description: "Developing enterprise-scale customer account management solutions for one of the largest utility providers in the US. Working on cloud-native microservices architecture using Azure Functions, APIM, Cosmos DB, and .NET Core to build secure, scalable, and high-performance applications.",
    tech: [".NET Core", "Microservices", "Cosmos DB", "APIM", "Bicep Templates", "Azure DevOps"],
    github: "#",
    demo: "#",
    code: `using System;
using Microsoft.AspNetCore.Mvc;

namespace Prasanna.Accenture.UtilityPortal
{
    [ApiController]
    [Route("api/v1/accounts")]
    public class AccountManagementController : ControllerBase
    {
        [HttpGet("{accountId}/billing-history")]
        public async Task<IActionResult> GetBillingHistory(string accountId)
        {
            var history = await _repository.GetBillsAsync(accountId);
            if (history == null) return NotFound();
            
            return Ok(history);
        }
    }
}`
  },
  "cognizant_pearson.cs": {
    title: "Cognizant - Pearson",
    category: "Education / EdTech",
    icon: <Zap className="text-amber-400" size={20} />,
    description: "Contributed to Pearson's digital learning and content management platform. Developed robust web APIs and background services, event schedulers, and supported Agile product delivery.",
    tech: ["C#", "ASP.NET Web APIs", "Azure Service Bus", "SQL Server", "Docker", "Git"],
    github: "#",
    demo: "#",
    code: `using System;
using Microsoft.Azure.ServiceBus;

namespace Prasanna.Cognizant.Scheduler
{
    public class AssessmentSchedulerQueueListener
    {
        public async Task ProcessQueueMessageAsync(Message message, CancellationToken token)
        {
            var assessmentId = Encoding.UTF8.GetString(message.Body);
            // Process assessment grading logic in background
            await _gradingService.ExecuteSyncAsync(assessmentId);
        }
    }
}`
  }
};

export default function ProjectsView({ fileId }) {
  const proj = PROJECTS_DATA[fileId] || PROJECTS_DATA["ltm_premera_bluecross.cs"];

  // Helper for basic syntax styling of C# code
  const getFormattedCode = (code) => {
    return code
      .replace(/(using|namespace|public|class|async|await|return|new|bool|string|var|resource)/g, '<span class="code-keyword">$1</span>')
      .replace(/("[^"]*")/g, '<span class="code-string">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="code-comment">$1</span>')
      .replace(/([a-zA-Z0-9_]+Client|ValidationResult|IActionResult|Message)/g, '<span class="code-class">$1</span>');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-0 overflow-y-auto p-4 sm:p-6 lg:p-8">
      {/* Code Editor Window Pane */}
      <div className="lg:col-span-7 glass-panel border-white/5 bg-slate-950/45 p-4 sm:p-5 flex flex-col font-mono text-xs h-fit select-text relative">
        <div className="absolute top-2 right-4 text-[9px] text-cyan-400/40 select-none">
          {fileId}
        </div>
        <div className="flex border-b border-white/5 pb-2.5 mb-3 text-[10px] text-gray-500 select-none">
          <span className="text-cyan-500/80 mr-2">&gt;_</span> EDITOR | C# LANGUAGE MODE
        </div>

        <div className="flex leading-relaxed overflow-x-auto">
          {/* Line Numbers */}
          <div className="text-gray-600 text-right pr-3 border-r border-white/5 mr-3 select-none">
            {proj.code.split('\n').map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          {/* Syntax Code block */}
          <pre 
            className="text-gray-300 whitespace-pre" 
            dangerouslySetInnerHTML={{ __html: getFormattedCode(proj.code) }}
          />
        </div>
      </div>

      {/* Visual Metadata Panel */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="glass-panel p-6 border border-white/5 bg-slate-950/20 flex flex-col h-full justify-between relative">
          <div className="absolute top-2 right-4 text-[8px] font-mono text-cyan-400/50">
            METADATA_HUD
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-400/5 px-2.5 py-1 rounded border border-cyan-400/10">
                {proj.category}
              </span>
              <div className="p-2 rounded-full bg-white/5 border border-white/5 text-cyan-400">
                {proj.icon}
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-gray-200 mb-3 font-mono leading-tight">
              {proj.title}
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
              {proj.description}
            </p>
          </div>

          <div>
            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-[10px] font-mono text-gray-500">
                &gt;_ production code
              </span>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="p-2 rounded bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors duration-200 border border-white/5 text-xs font-mono"
                  onClick={(e) => { e.preventDefault(); alert("GitHub repository is enterprise-private."); }}
                >
                  Code
                </a>
                <a
                  href="#"
                  className="p-2 rounded bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 transition-colors duration-200 border border-sky-500/10 text-xs font-mono flex items-center gap-1"
                  onClick={(e) => { e.preventDefault(); alert("Enterprise architectural sandbox - login required."); }}
                >
                  Case Study <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
