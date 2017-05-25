// --------------------------------------------------------------------------------------------------------------------
// <copyright file="DefaultRegistry.cs" company="Web Advanced">
// Copyright 2012 Web Advanced (www.webadvanced.com)
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace StructureMapPoC.DependencyResolution {
    using StructureMap.Configuration.DSL;
    using StructureMap.Graph;
    using StructureMapPoC.Controllers;

    public class DefaultRegistry : Registry {
        #region Constructors and Destructors

        public DefaultRegistry() {
            Scan(
                scan => {
                    scan.TheCallingAssembly(); // Find the registry in _this_ assembly i.e. the assembly in which we are running (which will be the compiled StructureMapPoC.dll?)
                    scan.WithDefaultConventions(); // i.e. map IMessageProvider to MessageProvider
					scan.With(new ControllerConvention());
                });

            For<IMessageProvider>()
                .Use<MessageProvider>()
                .SetProperty(p => p.SomeAttribute = "Hi. StructureMap set SomeAttribute")
                .Ctor<string>()
                .Is("Message kindly provided by the Container!");
        }

        #endregion
    }
}